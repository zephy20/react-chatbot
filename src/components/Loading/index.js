import React from "react";
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <span>
      <span className={styles.loadingStep}>...</span>
    </span>
  );
};

export default Loading;
