import style from "./projects.module.css";

type ProjectsCounterProps = {
  projectNumber: number;
  projectsTotal: number;
};

function ProjectsCounter({ projectNumber, projectsTotal }: ProjectsCounterProps) {
  return (
    <aside id={style.counter}>
      <span>Projet</span>
      <div id={style.counterWrapper}>
        <span id={style.counterValue}>{projectNumber}</span>|
        <span id={style.counterTotal}>{projectsTotal}</span>
      </div>
    </aside>
  );
}

export default ProjectsCounter;
