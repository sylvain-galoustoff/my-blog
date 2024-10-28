import { useEffect, useState } from "react";
import style from "./mailAddress.module.css";
import { MdContentCopy } from "react-icons/md";

function MailAddress() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    }
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@sylvain-galoustoff.dev");
    setIsCopied(true);
  };

  return (
    <div id={style.mailAdress}>
      <MdContentCopy id={style.copyIcon} onClick={handleCopy} />
      <a href="mailto:contact@sylvain-galoustoff.dev" target="_blank">
        {isCopied ? "Adresse copiée !" : "contact@sylvain-galoustoff.dev"}
      </a>
    </div>
  );
}

export default MailAddress;
