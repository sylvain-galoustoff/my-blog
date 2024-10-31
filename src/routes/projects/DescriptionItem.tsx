import { DescriptionType } from "../../models/Project";
import style from "./projects.module.css";
import { SiFigma, SiReact } from "react-icons/si";

type DescriptionItemProps = {
  item: DescriptionType;
};

const icons: Record<string, JSX.Element> = {
  figma: <SiFigma />,
  react: <SiReact />,
};

function DescriptionItem({ item }: DescriptionItemProps) {
  return (
    <li className={style.line}>
      {icons[item.techno]} {item.label}
    </li>
  );
}

export default DescriptionItem;
