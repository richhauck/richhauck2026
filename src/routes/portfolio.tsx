import { SITE_TITLE } from "#/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <title>{`Portfolio - ${SITE_TITLE}`}</title>
      <h1>Portfolio</h1>
    </div>
  );
}
