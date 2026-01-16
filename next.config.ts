import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
	output: "export",
	typescript: {
		ignoreBuildErrors: true,
	}
};

export default withSentryConfig(nextConfig, {
	org: "huys-organization-q7",
	project: "huy-portfolio",

	// Pass the auth token
	authToken: process.env.SENTRY_AUTH_TOKEN,

	// Only print logs for uploading source maps in CI
	silent: !process.env.CI,
});
