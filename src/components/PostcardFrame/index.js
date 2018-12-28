import React from "react";
import styles from "./styles.module.css";

const PostcardFrame = props => {
  return (
    <svg className={styles.postcardFrame} viewBox="0 0 600 400">
      {props.children}
    </svg>
  );
};

export default PostcardFrame;
