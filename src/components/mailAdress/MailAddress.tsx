import style from "./mailAddress.module.css";
import { MdContentCopy } from "react-icons/md";

function MailAddress() {
  return (
    <div id={style.mailAdress}>
      <a href="mailto:contact@sylvain-galoustoff.dev" target="_blank">
        contact@sylvain-galoustoff.dev
      </a>
      <MdContentCopy id={style.copyIcon} />
    </div>
  );
}

export default MailAddress;
