import { Link } from "react-router-dom";
import { IoChevronForward, IoArrowForward } from "react-icons/io5";
import style from "./buttons.module.css";

type ButtonLinkProps = {
  to: string;
  label: string;
  variant: string;
};

function ButtonLink({ to, label, variant }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${style.button} ${style[variant]}`}>
      <span className={style.buttonIcon}>
        <IoChevronForward className={style.chevron} />
        <IoArrowForward className={style.arrow} />
      </span>
      <span className={style.text}>{label}</span>
    </Link>
  );
}

export default ButtonLink;
