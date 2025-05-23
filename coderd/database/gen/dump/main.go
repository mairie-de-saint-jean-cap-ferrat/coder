package main

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"runtime"

	"golang.org/x/xerrors"

	"github.com/coder/coder/v2/coderd/database/dbtestutil"
	"github.com/coder/coder/v2/coderd/database/migrations"
)

var preamble = []byte("-- Code generated by 'make coderd/database/generate'. DO NOT EDIT.")

type mockTB struct {
	cleanup []func()
}

func (t *mockTB) Cleanup(f func()) {
	t.cleanup = append(t.cleanup, f)
}

func (*mockTB) Helper() {
	// noop
}

func (*mockTB) Logf(format string, args ...any) {
	_, _ = fmt.Printf(format, args...)
}

func main() {
	t := &mockTB{}
	defer func() {
		for _, f := range t.cleanup {
			f()
		}
	}()

	connection := os.Getenv("DB_DUMP_CONNECTION_URL")
	if connection == "" {
		var cleanup func()
		var err error
		connection, cleanup, err = dbtestutil.OpenContainerized(t, dbtestutil.DBContainerOptions{})
		if err != nil {
			err = xerrors.Errorf("open containerized database failed: %w", err)
			panic(err)
		}
		defer cleanup()
	}

	db, err := sql.Open("postgres", connection)
	if err != nil {
		err = xerrors.Errorf("open database failed: %w", err)
		panic(err)
	}
	defer db.Close()

	err = migrations.Up(db)
	if err != nil {
		err = xerrors.Errorf("run migrations failed: %w", err)
		panic(err)
	}

	dumpBytes, err := dbtestutil.PGDumpSchemaOnly(connection)
	if err != nil {
		err = xerrors.Errorf("dump schema failed: %w", err)
		panic(err)
	}

	_, mainPath, _, ok := runtime.Caller(0)
	if !ok {
		panic("couldn't get caller path")
	}
	err = os.WriteFile(filepath.Join(mainPath, "..", "..", "..", "dump.sql"), append(preamble, dumpBytes...), 0o600)
	if err != nil {
		err = xerrors.Errorf("write dump failed: %w", err)
		panic(err)
	}
}
