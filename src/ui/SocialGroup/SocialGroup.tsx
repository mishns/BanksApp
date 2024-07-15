import { default as React, FC } from "react";
import styles from "./socialgroup.css";
import {
  EmailIcon,
  EmailShareButton,
  TelegramIcon,
  TelegramShareButton,
  VKIcon,
  VKShareButton,
} from "react-share";

interface SocialGroupProps {}

export const SocialGroup: FC<SocialGroupProps> = () => {
  return (
    <div className={styles.socialGroup}>
      <TelegramShareButton
        className={styles.socialButton}
        url={window.location.href}
      >
        <TelegramIcon className={styles.socialIcon} />
      </TelegramShareButton>
      <VKShareButton className={styles.socialButton} url={window.location.href}>
        <VKIcon className={styles.socialIcon} />
      </VKShareButton>
      <EmailShareButton
        className={styles.socialButton}
        url={window.location.href}
      >
        <EmailIcon className={styles.socialIcon} />
      </EmailShareButton>
    </div>
  );
};
