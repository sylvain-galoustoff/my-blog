import { useLocation } from "react-router-dom";
import { projects } from "./mocks";
import { useEffect, useState } from "react";

function Project() {
  const location = useLocation();
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    const pathname = location.pathname;
    console.log(pathname);

    if (pathname.includes("projets")) {
      const currentProject = projects.filter((project) => project.pathname === pathname);
      console.log(currentProject);

      if (currentProject) {
        setProject(currentProject[0]);
      }
    }
  }, [location.pathname]);

  return (
    <div className="slide" id="project">
      <h1>{project.name}</h1>
    </div>
  );
}

export default Project;
