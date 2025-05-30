import type { WorkspaceBuildTimings } from "api/typesGenerated";

export const WorkspaceTimingsResponse: WorkspaceBuildTimings = {
	provisioner_timings: [
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:38.582305Z",
			ended_at: "2024-10-14T11:30:47.707708Z",
			stage: "init",
			source: "terraform",
			action: "initializing terraform",
			resource: "state file",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.255148Z",
			ended_at: "2024-10-14T11:30:48.263557Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_workspace_owner.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.255183Z",
			ended_at: "2024-10-14T11:30:48.267143Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_parameter.repo_base_dir",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.255196Z",
			ended_at: "2024-10-14T11:30:48.264778Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.coder-login.data.coder_workspace_owner.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.255208Z",
			ended_at: "2024-10-14T11:30:48.263557Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_parameter.image_type",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.255219Z",
			ended_at: "2024-10-14T11:30:48.263596Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_external_auth.github",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.255265Z",
			ended_at: "2024-10-14T11:30:48.274588Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.dotfiles.data.coder_parameter.dotfiles_uri[0]",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.263613Z",
			ended_at: "2024-10-14T11:30:48.281025Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.jetbrains_gateway.data.coder_parameter.jetbrains_ide",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.264708Z",
			ended_at: "2024-10-14T11:30:48.275815Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.jetbrains_gateway.data.coder_workspace.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.264873Z",
			ended_at: "2024-10-14T11:30:48.270726Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_workspace.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.26545Z",
			ended_at: "2024-10-14T11:30:48.281326Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "data.coder_parameter.region",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.27066Z",
			ended_at: "2024-10-14T11:30:48.292004Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.filebrowser.data.coder_workspace_owner.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.275249Z",
			ended_at: "2024-10-14T11:30:48.292609Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.cursor.data.coder_workspace_owner.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.275368Z",
			ended_at: "2024-10-14T11:30:48.306164Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.cursor.data.coder_workspace.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.279611Z",
			ended_at: "2024-10-14T11:30:48.610826Z",
			stage: "plan",
			source: "http",
			action: "read",
			resource:
				'module.jetbrains_gateway.data.http.jetbrains_ide_versions["WS"]',
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.281101Z",
			ended_at: "2024-10-14T11:30:48.289783Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.coder-login.data.coder_workspace.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.281158Z",
			ended_at: "2024-10-14T11:30:48.292784Z",
			stage: "plan",
			source: "coder",
			action: "read",
			resource: "module.filebrowser.data.coder_workspace.me",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.306734Z",
			ended_at: "2024-10-14T11:30:48.611667Z",
			stage: "plan",
			source: "http",
			action: "read",
			resource:
				'module.jetbrains_gateway.data.http.jetbrains_ide_versions["GO"]',
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.380177Z",
			ended_at: "2024-10-14T11:30:48.385342Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "coder_agent.dev",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.414139Z",
			ended_at: "2024-10-14T11:30:48.437781Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.slackme.coder_script.install_slackme",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.414522Z",
			ended_at: "2024-10-14T11:30:48.436733Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.dotfiles.coder_script.dotfiles",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.415421Z",
			ended_at: "2024-10-14T11:30:48.43439Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.git-clone.coder_script.git_clone",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.41568Z",
			ended_at: "2024-10-14T11:30:48.427176Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.personalize.coder_script.personalize",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.416327Z",
			ended_at: "2024-10-14T11:30:48.4375Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.code-server.coder_app.code-server",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.41705Z",
			ended_at: "2024-10-14T11:30:48.435293Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.cursor.coder_app.cursor",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.422605Z",
			ended_at: "2024-10-14T11:30:48.432662Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.coder-login.coder_script.coder-login",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.456454Z",
			ended_at: "2024-10-14T11:30:48.46477Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.code-server.coder_script.code-server",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.456791Z",
			ended_at: "2024-10-14T11:30:48.464265Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.filebrowser.coder_script.filebrowser",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.459278Z",
			ended_at: "2024-10-14T11:30:48.463592Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.filebrowser.coder_app.filebrowser",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.624758Z",
			ended_at: "2024-10-14T11:30:48.626424Z",
			stage: "plan",
			source: "coder",
			action: "state refresh",
			resource: "module.jetbrains_gateway.coder_app.gateway",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.909834Z",
			ended_at: "2024-10-14T11:30:49.198073Z",
			stage: "plan",
			source: "docker",
			action: "state refresh",
			resource: "docker_volume.home_volume",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:48.914974Z",
			ended_at: "2024-10-14T11:30:49.279658Z",
			stage: "plan",
			source: "docker",
			action: "read",
			resource: "data.docker_registry_image.dogfood",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:49.281906Z",
			ended_at: "2024-10-14T11:30:49.911366Z",
			stage: "plan",
			source: "docker",
			action: "state refresh",
			resource: "docker_image.dogfood",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:50.001069Z",
			ended_at: "2024-10-14T11:30:50.53433Z",
			stage: "graph",
			source: "terraform",
			action: "building terraform dependency graph",
			resource: "state file",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:50.861398Z",
			ended_at: "2024-10-14T11:30:50.91401Z",
			stage: "apply",
			source: "coder",
			action: "delete",
			resource: "module.coder-login.coder_script.coder-login",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:50.930172Z",
			ended_at: "2024-10-14T11:30:50.932034Z",
			stage: "apply",
			source: "coder",
			action: "create",
			resource: "module.coder-login.coder_script.coder-login",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:51.228719Z",
			ended_at: "2024-10-14T11:30:53.672338Z",
			stage: "apply",
			source: "docker",
			action: "create",
			resource: "docker_container.workspace[0]",
		},
		{
			job_id: "86fd4143-d95f-4602-b464-1149ede62269",
			started_at: "2024-10-14T11:30:53.689718Z",
			ended_at: "2024-10-14T11:30:53.693767Z",
			stage: "apply",
			source: "coder",
			action: "create",
			resource: "coder_metadata.container_info[0]",
		},
	],
	agent_script_timings: [
		{
			started_at: "2024-10-14T11:30:56.650536Z",
			ended_at: "2024-10-14T11:31:10.852776Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "Startup Script",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.650915Z",
			ended_at: "2024-10-14T11:30:56.655558Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "Dotfiles",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.650715Z",
			ended_at: "2024-10-14T11:30:56.657682Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "Personalize",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.650512Z",
			ended_at: "2024-10-14T11:30:56.657981Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "install_slackme",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.650659Z",
			ended_at: "2024-10-14T11:30:57.318177Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "Coder Login",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.650666Z",
			ended_at: "2024-10-14T11:30:58.350832Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "File Browser",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.652425Z",
			ended_at: "2024-10-14T11:31:26.229407Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "code-server",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
		{
			started_at: "2024-10-14T11:30:56.650423Z",
			ended_at: "2024-10-14T11:30:56.657224Z",
			exit_code: 0,
			stage: "start",
			status: "ok",
			display_name: "Git Clone",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
	],
	agent_connection_timings: [
		{
			started_at: "2024-10-14T11:30:55.650423Z",
			ended_at: "2024-10-14T11:30:56.650423Z",
			stage: "connect",
			workspace_agent_id: "86fd4143-d95f-4602-b464-1149ede62269",
			workspace_agent_name: "dev",
		},
	],
};
