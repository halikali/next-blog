import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import style from "./share.module.scss";

const Share = () => {
  return (
    <ul className={style.shareButtonWrapper}>
      <li className={style.shareButton}>
        <FontAwesomeIcon icon={faFacebook} className={style.shareIcon} />
        <p className={style.shareText}>Share on Facebook</p>
      </li>
      <li className={style.shareButton}>
        <FontAwesomeIcon icon={faTwitter} className={style.shareIcon} />
        <p className={style.shareText}>Share on Twitter</p>
      </li>
      <li className={`${style.shareButton} ${style.shareWhatsappButton}`}>
        <FontAwesomeIcon icon={faWhatsapp} className={style.shareIcon} />
      </li>
    </ul>
  );
};

export default Share;
