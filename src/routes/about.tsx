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
                I started my career as a web designer completing interface
                designs, illustration work, and simple web-based games and
                screensavers. I was attracted to programming in the early 2000s
                through Flash/ActionScript and programmatic art in
                <a href="https://processing.org/" target="_blank">
                  Processing
                </a>
                . I've transitioned that interest to standards-based languages,
                and am always focusing on technology through the lens of the
                user.
              </p>
              <p>
                I'm currently a lead software engineer with Oliver Wyman, where
                I prototype web applications. I previously held roles with
                Deloitte and the NYSE.
              </p>

              <p>
                Prior to that, I operated through
                <a href="https://www.hauckinteractive.com">
                  Hauck Interactive, Inc.
                </a>
                helping small and medium businesses with design. I still work
                under this for the occasional small project, as well as for
                award-winning illustrations with{" "}
                <a href="https://theburgnews.com/">The Burg</a> and some popular{" "}
                <a href="https://www.torchbearersauces.com/">hot sauces</a>.
              </p>

              <p>
                My teaching career stemmed from wanting to give students an
                education in web design that more closely aligned with the
                industry--something I didn't experience in my first web design
                class. I've since taught for over 20 years.
              </p>

              <p>
                I currently reside in Harrisburg, Pennsylvania with my wife and
                three boys. I play pickup ultimate whenever I can, and practice
                Judo and Jujitsu.
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
