import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SITE_TITLE } from "../constants";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="about">
      <title>{`About - ${SITE_TITLE}`}</title>
      <grid-container size="lg" style={{ margin: "0 auto", padding: "0" }}>
        <grid-row style={{ alignItems: "stretch" }}>
          <grid-col span="8" style={{ display: "flex" }}>
            <div
              className="box about-fade"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
                transitionDelay: "0.3s",
              }}
            >
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
          <grid-col span="4" style={{ display: "flex" }}>
            <img
              src="images/rich-hauck.webp"
              alt="Rich Hauck"
              className="about-fade border"
              style={{
                width: "100%",
                objectFit: "cover",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
                transitionDelay: "0.7s",
              }}
            />
          </grid-col>
        </grid-row>
      </grid-container>
    </section>
  );
}
