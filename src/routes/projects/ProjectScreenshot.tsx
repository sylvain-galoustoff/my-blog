import style from "./projects.module.css";
import ExternalButtonLink from "../../components/buttons/ExternalLink";

type ProjectScreenshotProps = {
  filename: string;
  projectName: string;
  url?: string;
};

function ProjectScreenshot({ filename, projectName, url }: ProjectScreenshotProps) {
  const imagePath = new URL(`../../assets/screenshots/${filename}`, import.meta.url).href;

  return (
    <aside className={style.slidePart} id={style.screenshot}>
      <img src={imagePath} alt={`Capture d'écran du projet ${projectName}`} />
      {url && <ExternalButtonLink to={url} label="Voir le site" variant="white" />}
    </aside>
  );
}

export default ProjectScreenshot;
