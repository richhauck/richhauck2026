import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useProject } from "#/hooks/useProjects";
import useProjectsStore from "#/stores/useProjectsStore";
import { SITE_TITLE } from "#/constants";
import type { ProjectData } from "#/types/project";

export const Route = createFileRoute("/portfolio/$projectId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { projectId } = useParams({ from: "/portfolio/$projectId" });
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const { setProjectDataById, getProjectDataById } = useProjectsStore();
  const projectDataById = getProjectDataById(projectId);
  const { data, isLoading, error } = useProject(projectId);

  // Handle data fetched from API by saving to store
  useEffect(() => {
    if (data) {
      setProjectDataById(projectId, data);
    }
  }, [data, projectId, setProjectDataById]);

  // Handle loading project data from store (if available)
  useEffect(() => {
    if (projectDataById) {
      setProjectData(projectDataById);
    }
  }, [projectDataById]);

  if (isLoading) {
    return <div>Loading project...</div>;
  }

  if (error) {
    return <div>Error loading project: {error.message}</div>;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <section id="project">
      <title>{`${projectData.name} - ${SITE_TITLE}`}</title>
      <article>
        <header>
          <h1>{projectData.name}</h1>
          <p className="subtitle">{projectData.description}</p>
        </header>

        <div className="project-meta">
          <div className="meta-item">
            <h3>Project</h3>
            <p>{projectData.project}</p>
          </div>
          <div className="meta-item">
            <h3>Client</h3>
            <p>{projectData.client}</p>
          </div>
          {projectData.categories && (
            <div className="meta-item">
              <h3>Categories</h3>
              <p>{projectData.categories.join(", ")}</p>
            </div>
          )}
          {projectData.url && (
            <div className="meta-item">
              <h3>Website</h3>
              <a
                href={projectData.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectData.url}
              </a>
            </div>
          )}
        </div>

        {projectData.images && (
          <div className="project-images">
            {projectData.images.map((image: string, index: number) => (
              <figure key={index}>
                <img
                  src={image}
                  alt={`${projectData.name} - Image ${index + 1}`}
                />
              </figure>
            ))}
          </div>
        )}
      </article>
    </section>
  );
}
