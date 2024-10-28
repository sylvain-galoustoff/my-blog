import Nav from "../nav/Nav";
import MailAddress from "../mailAdress/MailAddress";
import SocialLinks from "../socialLinks/SocialLinks";
import style from "./topbar.module.css";

function Topbar() {
  return (
    <div id={style.topbar}>
      <MailAddress />
      <Nav />
      <SocialLinks />
    </div>
  );
}

export default Topbar;
