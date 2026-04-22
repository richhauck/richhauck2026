import LoadingSpinner from "#/components/LoadingSpinner";
import WorkThumb from "#/components/WorkThumb";
import { SITE_TITLE } from "#/constants";
import { useProjects } from "#/hooks/useProjects";
import useMobileStore from "#/stores/useMobileStore";
import useProjectsStore from "#/stores/useProjectsStore";
import type { Project } from "#/types/project";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/portfolio/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { projects, setProjects } = useProjectsStore();
  const { data, error, isLoading } = useProjects();
  const { isMobile } = useMobileStore();

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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error loading portfolio</div>;
  }
  return (
    <section id="portfolio">
      <title>{`Portfolio - ${SITE_TITLE}`}</title>
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
