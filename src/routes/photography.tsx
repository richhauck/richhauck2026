import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";

export const Route = createFileRoute("/photography")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <title>{`Photography - ${SITE_TITLE}`}</title>
      <h1>Photography</h1>
    </div>
  );
}
