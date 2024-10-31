import ProjectType from "../../models/Project";
import DescriptionItem from "./DescriptionItem";
import ProjectMeta from "./ProjectMeta";
import style from "./projects.module.css";

type ProjectDescriptionProps = {
  project: ProjectType;
  projectNumber: number;
};

function ProjectDescription({ project, projectNumber }: ProjectDescriptionProps) {
  const renderDescription = project.description.map((description, index) => (
    <DescriptionItem key={`description-${index}`} item={description} />
  ));

  return (
    <main className={style.slidePart} id={style.content}>
      <div id={style.header}>
        <p id={style.projectNumber}>{projectNumber}.</p>
        <h1 id={style.name}>{project.name}</h1>
      </div>
      <ul id={style.technos}>{renderDescription}</ul>
      <div id={style.metaContainer}>
        <ProjectMeta label="Rôle" values={project.roles} />
        <ProjectMeta label="Année" values={project.year} />
        <ProjectMeta label="Contexte" values={project.context} />
      </div>
    </main>
  );
}

export default ProjectDescription;
