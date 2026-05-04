import { createFileRoute } from "@tanstack/react-router";
import { SITE_TITLE } from "../constants";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const Route = createFileRoute("/now")({
  component: RouteComponent,
});

function RouteComponent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <section id="now">
      <title>{`Now - ${SITE_TITLE}`}</title>
      <div
        className="box element-fade"
        style={{
          margin: "0 auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(1rem)",
          transitionDelay: "0.3s",
        }}
      >
        <h1>Now</h1>
        <p>
          <em>
            Last Published: {dayjs(__BUILD_DATE__).format("MMMM D, YYYY")}
          </em>
        </p>
        <p>
          <em>
            Inspired by the <a href="https://nownownow.com/">Now Now Now</a>{" "}
            project.
          </em>
        </p>
        <h2>What I'm Up To</h2>
        <ul>
          <li>Trying to vibe-code a project from start to finish</li>
          <li>Brushing up on my Python skills</li>
          <li>
            Painting this month's{" "}
            <a href="https://theburgnews.com/">The Burg</a> illustration
          </li>
          <li>
            Reading "All the Beauty in the World: The Metropolitan Museum of Art
            and Me"
          </li>
          <li>
            Watching <em>Daredevil: Born Again</em> and <em>The Boys</em>
          </li>
          <li>
            Working on throwing an{" "}
            <a href="https://ultimatefrisbeehq.com/pages/trick-frisbee-throws">
              air bounce
            </a>
          </li>
          <li>
            Trying (and failing) to keep up with my 9-year-old's Duolingo
            streak.
          </li>
        </ul>
      </div>
    </section>
  );
}
