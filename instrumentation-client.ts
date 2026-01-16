import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    // Adds request headers and IP for users
    sendDefaultPii: true,
    // Capture 100% in dev, 10% in production
    // Adjust based on your traffic volume
    tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
    // Enable logs to be sent to Sentry
    enableLogs: true,

    // Add integrations
    integrations: [
        // Session Replay
        Sentry.replayIntegration(),

        // User feedback 
        Sentry.feedbackIntegration({
            colorScheme: "dark",
        }),
    ],

    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// This export will instrument router navigations
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;