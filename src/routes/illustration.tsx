import { SITE_TITLE } from "#/constants";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/illustration")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <title>{`Illustration - ${SITE_TITLE}`}</title>
      <div>
        <h1>Illustration</h1>
      </div>
    </>
  );
}
