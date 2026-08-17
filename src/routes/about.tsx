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

  const experiences = [
    {
      company: "Oliver Wyman",
      position: "Lead Software Engineer - Quotient AI Team",
      period: "August 2021 - Present",
      location: "New York, NY",
      description:
        "Led front-end design and development of an internal generative AI platform used by thousands of consultants firm-wide. Architected the UI for a tool that orchestrates multiple LLMs, integrates with SharePoint, and includes a visual DAG editor for prompt chaining. Managed a team of front-end engineers.",
    },
    {
      company: "Hauck Interactive",
      position: "Owner/Designer/Developer",
      period: "January 2006 - Present",
      location: "Harrisburg, PA",
      description:
        "Interactive design, development, and branding for small businesses and agencies. Worked with clients including Fitbit, Showtime Networks, Verizon, and NYU.",
    },
    {
      company: "HACC (Harrisburg Area Community College)",
      position: "Adjunct Instructor",
      period: "January 2004 - Present",
      location: "Harrisburg, PA",
      description:
        "Teach interactive media and design. Serving on the graphic and interactive design program's advisory board.",
    },
    {
      company: "Deloitte",
      position: "Senior Solutions Specialist",
      period: "June 2019 - August 2021",
      location: "Mechanicsburg, PA",
      description:
        "Built D3 and ArcGIS visualizations on a React-based CMS backed by PostgreSQL for a federal government client.",
    },
    {
      company: "New York Stock Exchange",
      position: "Engineer",
      period: "July 2018 - April 2019",
      location: "New York, NY",
      description:
        "Assisted in the acquisition of the startup Radiate, helped architect ICE/NYSE's Insights portal and developed a custom video player. Supplied design/development to other Intercontinental Exchange sites including Bakkt.",
    },
  ];

  return (
    <section id="about">
      <title>{`About - ${SITE_TITLE}`}</title>
      <grid-container size="lg" style={{ margin: "0 auto", padding: "0" }}>
        <grid-row style={{ alignItems: "stretch" }}>
          <grid-col span="8" style={{ display: "flex" }}>
            <div
              className="box element-fade"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
                transitionDelay: "0.3s",
              }}
            >
              <h1>About Me</h1>
              <p>
                {" "}
                I started my career as a web designer completing interface
                designs, illustration work, and simple web-based games and
                screensavers. I was attracted to programming in the early 2000s
                through Flash/ActionScript and programmatic art in{" "}
                <a href="https://processing.org/" target="_blank">
                  Processing
                </a>
                . I've transitioned that interest to standards-based languages,
                and am always focusing on technology through the lens of the
                user.
              </p>
              <p>
                Check out my <a href="/now">Now</a> page to read up on what I'm
                currently doing.
              </p>
              <hr />
              {/* Career Journey */}
              <h2>Career Journey</h2>
              {experiences.map((exp) => (
                <div
                  className="box"
                  style={{
                    marginBottom: "1rem",
                  }}
                  key={exp.company}
                >
                  <h4 style={{ marginBottom: "0" }}>{exp.position}</h4>
                  <p style={{ marginTop: "0" }}>
                    {exp.company}
                    <br />
                    {exp.period} | {exp.location}
                  </p>
                  <p>{exp.description}</p>
                </div>
              ))}

              <hr />
              {/* Technical Skills */}
              <div id="technical-skills">
                <h2>Technical Skills</h2>

                <grid-container style={{ margin: "0 auto", padding: "0" }}>
                  <grid-row style={{ alignItems: "stretch" }}>
                    <grid-col span="6" style={{ display: "flex" }}>
                      <div className="box">
                        <h3>Front-end</h3>
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>Vue.js</li>
                          <li>TypeScript</li>
                          <li>React</li>
                          <li>Next.js</li>
                          <li>Solid.js</li>
                        </ul>
                      </div>
                    </grid-col>
                    <grid-col span="6" style={{ display: "flex" }}>
                      <div className="box">
                        <h3>Back-end</h3>
                        <ul>
                          <li>Node.js</li>
                          <li>Python</li>
                          <li>MariaDB</li>
                          <li>PHP</li>
                        </ul>
                      </div>
                    </grid-col>
                    <grid-col span="6" style={{ display: "flex" }}>
                      <div className="box">
                        <h3>Design</h3>
                        <ul>
                          <li>UI/UX Design</li>
                          <li>Prototyping</li>
                          <li>Brand Identity</li>
                          <li>Illustration</li>
                          <li>Figma</li>
                          <li>Adobe Creative Suite</li>
                        </ul>
                      </div>
                    </grid-col>
                    <grid-col span="6" style={{ display: "flex" }}>
                      <div className="box">
                        <h3>AI/Data</h3>
                        <ul>
                          <li>AI</li>
                          <li>D3.js</li>
                        </ul>
                      </div>
                    </grid-col>
                  </grid-row>
                </grid-container>
              </div>

              <hr />
              <grid-container style={{ margin: "0 auto", padding: "0" }}>
                <grid-row style={{ alignItems: "stretch" }}>
                  <grid-col span="6" style={{ display: "flex" }}>
                    <div className="box">
                      <h3>Honors &amp; Awards</h3>
                      <ul>
                        <li>14 Keystone Media Awards for illustration</li>
                        <li>
                          Prix Ars Electronica, Honorary Mention: "Digital
                          Communities", 2006
                        </li>
                      </ul>
                    </div>
                  </grid-col>
                  <grid-col span="6" style={{ display: "flex" }}>
                    <div className="box">
                      <h3>Quick Facts</h3>
                      <ul>
                        <li>Ultimate Frisbee player</li>
                        <li>Based in Harrisburg, Pennsylvania</li>
                        <li>20+ years teaching web design</li>
                        <li>Practice Judo and Jujitsu</li>
                      </ul>
                    </div>
                  </grid-col>
                </grid-row>
              </grid-container>
            </div>
          </grid-col>
          <grid-col span="4" style={{ display: "flex" }}>
            <div>
              <img
                src="images/rich-hauck.webp"
                alt="Rich Hauck"
                className="element-fade border"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1rem)",
                  transitionDelay: "0.7s",
                }}
              />
            </div>
          </grid-col>
        </grid-row>
      </grid-container>
    </section>
  );
}
