import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoading({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoading}
        className={styles.img}
        alt={alt}
        {...props}
      ></img>
    </div>
  );
};

export default Image;
