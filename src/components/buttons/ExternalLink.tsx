import { IoChevronForward, IoArrowForward } from "react-icons/io5";
import style from "./buttons.module.css";

type ExternalButtonLinkProps = {
  to: string;
  label: string;
  variant?: string;
};

function ExternalButtonLink({ to, label, variant }: ExternalButtonLinkProps) {
  return (
    <a
      href={to}
      className={`${style.button} ${variant && style[variant]}`}
      target="_blank"
    >
      <span className={style.buttonIcon}>
        <IoChevronForward className={style.chevron} />
        <IoArrowForward className={style.arrow} />
      </span>
      <span className={style.text}>{label}</span>
    </a>
  );
}

export default ExternalButtonLink;
