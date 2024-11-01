import { useLocation } from "react-router-dom";
import { projects } from "./mock";
import { useEffect, useState } from "react";
import ProjectsCounter from "./ProjectsCounter";
import ProjectScreenshot from "./ProjectScreenshot";
import ProjectDescription from "./ProjectDescription";
import ProjectType from "../../models/Project";

function Project() {
  const location = useLocation();
  const [project, setProject] = useState<ProjectType>(projects[0]);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.includes("projets")) {
      const currentProject = projects.filter((project) => project.pathname === pathname);
      if (currentProject) {
        setProject(currentProject[0]);
      }
    }
  }, [location.pathname]);

  return (
    <div className="slide" id="project">
      <ProjectsCounter
        projectNumber={projects.indexOf(project) + 1}
        projectsTotal={projects.length}
      />
      <ProjectScreenshot
        projectName={project.name}
        filename={project.screenshot}
        url={project.url}
        variant={project.variant}
      />
      <ProjectDescription
        project={project}
        projectNumber={projects.indexOf(project) + 1}
      />
    </div>
  );
}

export default Project;
