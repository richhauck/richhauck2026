import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SITE_TITLE } from "../constants";

export const Route = createFileRoute("/art")({
  component: Art,
});

function Art() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="art">
      <title>{`Art - ${SITE_TITLE}`}</title>
    </section>
  );
}
