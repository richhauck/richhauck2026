import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="box">
      <title>{`About - ${SITE_TITLE}`}</title>
      <h1>About</h1>
      <p>
        I've always been fascinated with the intersection of design and
        technology, starting from my college days working in Macromedia Director
        and Flash (does that make me old?), to designing screensavers and games
        , to playing with Processing at my graduate program (NYU's ITP), up to
        the JavaScript frameworks I work with daily today. I'm currently a lead
        software engineer with Oliver Wyman, an instructor of interactive media
        and photography at Harrisburg Area Community College, and on the side
        still humbly run Hauck Interactive, Inc. where my niche has been
        WordPress custom theme design and development for small and medium
        businesses. The latter has also afforded me to be an award-winning
        illustrator for The Burg and for some fairly popular hot sauces.
      </p>
    </div>
  );
}
