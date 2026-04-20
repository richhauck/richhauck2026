import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useProject } from "#/hooks/useProjects";
import useProjectsStore from "#/stores/useProjectsStore";
import { SITE_TITLE } from "#/constants";
import type { ProjectData } from "#/types/project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useEffect(() => {
    if (!projectData) return;

    gsap.registerPlugin(ScrollTrigger);

    const targets = gsap.utils.toArray<Element>("#project-meta, figure");
    targets.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          scrollTrigger: {
            trigger: el,

            start: "top 50%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [projectData]);

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
      <grid-container size="md" style={{ margin: "0 auto" }}>
        <article>
          <div id="project-meta" className="box">
            <grid-container size="lg">
              <grid-row>
                <grid-col span="7">
                  <h1>{projectData.name}</h1>
                  <p>{projectData.description}</p>
                </grid-col>
                <grid-col span="5">
                  <table>
                    <tbody>
                      <tr>
                        <th>Project</th>
                        <td>{projectData.project}</td>
                      </tr>
                      <tr>
                        <th>Client</th>
                        <td>{projectData.client}</td>
                      </tr>
                      {projectData.categories && (
                        <tr>
                          <th>Categories</th>
                          <td>{projectData.categories.join(", ")}</td>
                        </tr>
                      )}
                      {projectData.url && (
                        <tr>
                          <th>Website</th>
                          <td>
                            <a
                              href={projectData.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {projectData.url}
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </grid-col>
              </grid-row>
            </grid-container>
          </div>

          {projectData.images && (
            <div id="project-images">
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
      </grid-container>
    </section>
  );
}
