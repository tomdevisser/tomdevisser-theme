import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

if (window.location.origin.includes("tomdevisser.blog")) {
	Sentry.init({
		dsn: "https://5d067d31c4d24236830e18a69d9ce258@o4504475606974464.ingest.sentry.io/4504717685358592",
		integrations: [new BrowserTracing()],
	});
}
