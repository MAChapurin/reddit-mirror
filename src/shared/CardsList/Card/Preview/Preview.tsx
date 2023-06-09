import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  previewImg?: string;
}

export function Preview({previewImg}:IPreviewProps) {
  return (
    <div className={styles.preview}>
    <img className={styles.previewImg}
    src={previewImg}
      // src="https://cdn.dribbble.com/userupload/3980559/file/still-59fe610c6d7ff1836ba546f646b7e0ff.png?compress=1&resize=400x300&vertical=top"
      alt="Image" />
  </div>
  );
}
