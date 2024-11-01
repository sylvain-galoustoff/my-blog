import style from "./projects.module.css";
import ExternalButtonLink from "../../components/buttons/ExternalLink";

type ProjectScreenshotProps = {
  filename: string;
  projectName: string;
  url?: string;
  variant?: string;
};

function ProjectScreenshot({
  filename,
  projectName,
  url,
  variant,
}: ProjectScreenshotProps) {
  const imagePath = new URL(`../../assets/screenshots/${filename}`, import.meta.url).href;

  const buttonData = {
    myexpressdriver: {
      label: "voir le site",
      variant: "med",
    },
    "sylvain-galoustoff.dev": {
      label: "voir la demo",
      variant: "primary",
    },
    "smart home control": {
      label: "voir la demo",
      variant: "shc",
    },
  };

  return (
    <aside className={style.slidePart} id={style.screenshot}>
      <img src={imagePath} alt={`Capture d'écran du projet ${projectName}`} />
      {url && <ExternalButtonLink to={url} label="Voir le site" variant="white" />}
    </aside>
  );
}

export default ProjectScreenshot;
