import LoadingSpinner from "#/components/LoadingSpinner";
import WorkThumb from "#/components/WorkThumb";
import { SITE_TITLE } from "#/constants";
import { useProjects } from "#/hooks/useProjects";
import useMobileStore from "#/stores/useMobileStore";
import useProjectsStore from "#/stores/useProjectsStore";
import type { Project } from "#/types/project";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/portfolio/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { projects, setProjects } = useProjectsStore();
  const { data, error, isLoading } = useProjects();
  const { isMobile } = useMobileStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      data &&
      typeof data === "object" &&
      "projects" in data &&
      Array.isArray(data.projects)
    ) {
      const projectsData: Project[] = data.projects as Project[];
      setProjects(projectsData);
    }
  }, [data]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error loading portfolio</div>;
  }
  return (
    <section id="portfolio">
      <title>{`Portfolio - ${SITE_TITLE}`}</title>

      <grid-container size="lg" style={{ margin: "0 auto", padding: "0" }}>
        <grid-row style={{ alignItems: "stretch" }}>
          <grid-col span="12" style={{ display: "flex" }}>
            <div
              className="box content-box element-fade"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
              }}
            >
              <div className="content-box-inner">
                <h1>Portfolio</h1>
                <p>
                  My focus the past few years has been building single-page
                  applications and web apps with React, TypeScript, and Node.js
                  (most of which can't be shared publicly). Below are examples
                  of my work with small businesses through and include examples
                  of visual design, development, and branding.
                </p>
              </div>
            </div>
          </grid-col>
        </grid-row>
      </grid-container>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          id="work-thumbs"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "repeat(1, minmax(0, 1fr))"
              : "repeat(3, minmax(0, 1fr))",
            paddingLeft: isMobile ? "1.25rem" : "0",
            paddingRight: isMobile ? "1.25rem" : "0",
            gap: "1rem",
          }}
        >
          {projects.map((project: Project, index: number) => (
            <WorkThumb key={project.id} props={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
