import { SiGithub, SiLinkedin } from "react-icons/si";
import SocialIcon from "./SocialIcon";
import style from "./socialLinks.module.css";

function SocialLinks() {
  return (
    <div id={style.socialLinks}>
      <SocialIcon
        icon={<SiGithub />}
        url="https://github.com/sylvain-galoustoff"
        title="Voi mon profil GitHub"
      />
      <SocialIcon
        icon={<SiLinkedin />}
        url="https://www.linkedin.com/in/sylvain-galoustoff/"
        title="Voi mon profil LinnkedIn"
      />
    </div>
  );
}

export default SocialLinks;
