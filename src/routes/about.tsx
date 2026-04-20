import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <section id="about">
      <title>{`About - ${SITE_TITLE}`}</title>
      <grid-container size="lg" style={{ margin: "0 auto" }}>
        <grid-row>
          <grid-col span="8">
            <div className="box">
              <p>
                I've always been fascinated with the intersection of design and
                technology, starting from my college days working in Macromedia
                Director and Flash (does that make me old?), to designing
                screensavers and games , to playing with Processing at my
                graduate program (NYU's ITP), up to the JavaScript frameworks I
                work with daily today. I'm currently a lead software engineer
                with Oliver Wyman, an instructor of interactive media and
                photography at Harrisburg Area Community College, and on the
                side still humbly run Hauck Interactive, Inc. where my niche has
                been WordPress custom theme design and development for small and
                medium businesses. The latter has also afforded me to be an
                award-winning illustrator for The Burg and for some fairly
                popular hot sauces.
              </p>
            </div>
          </grid-col>
          <grid-col span="4">
            <img src="images/rich-hauck.webp" alt="Rich Hauck" />
          </grid-col>
        </grid-row>
      </grid-container>
    </section>
  );
}
