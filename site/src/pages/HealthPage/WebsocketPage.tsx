import { useTheme } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";
import type { HealthcheckReport } from "api/typesGenerated";
import { Alert } from "components/Alert/Alert";
import { CodeIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import { MONOSPACE_FONT_FAMILY } from "theme/constants";
import { pageTitle } from "utils/page";
import {
	Header,
	HeaderTitle,
	HealthyDot,
	Main,
	Pill,
	SectionLabel,
} from "./Content";
import { DismissWarningButton } from "./DismissWarningButton";

const WebsocketPage = () => {
	const healthStatus = useOutletContext<HealthcheckReport>();
	const { websocket } = healthStatus;
	const theme = useTheme();

	return (
		<>
			<Helmet>
				<title>{pageTitle("Websocket - Health")}</title>
			</Helmet>

			<Header>
				<HeaderTitle>
					<HealthyDot severity={websocket.severity} />
					Websocket
				</HeaderTitle>
				<DismissWarningButton healthcheck="Websocket" />
			</Header>

			<Main>
				{websocket.error && <Alert severity="error">{websocket.error}</Alert>}

				{websocket.warnings.map((warning) => {
					return (
						<Alert key={warning.code} severity="warning">
							{warning.message}
						</Alert>
					);
				})}

				<section>
					<Tooltip title="Code">
						<Pill icon={<CodeIcon className="size-icon-sm" />}>
							{websocket.code}
						</Pill>
					</Tooltip>
				</section>

				<section>
					<SectionLabel>Body</SectionLabel>
					<div
						css={{
							backgroundColor: theme.palette.background.paper,
							border: `1px solid ${theme.palette.divider}`,
							borderRadius: 8,
							fontSize: 14,
							padding: 24,
							fontFamily: MONOSPACE_FONT_FAMILY,
						}}
					>
						{websocket.body !== "" ? (
							websocket.body
						) : (
							<span css={{ color: theme.palette.text.secondary }}>
								No body message
							</span>
						)}
					</div>
				</section>
			</Main>
		</>
	);
};

export default WebsocketPage;
