import style from "./socialLinks.module.css";

type SocialIconProps = {
  icon: JSX.Element;
  url: string;
  title: string;
};

function SocialIcon({ icon, url, title }: SocialIconProps) {
  return (
    <div className={style.socialIcon}>
      <a href={url} title={title} about="_blank">
        {icon}
      </a>
    </div>
  );
}

export default SocialIcon;
