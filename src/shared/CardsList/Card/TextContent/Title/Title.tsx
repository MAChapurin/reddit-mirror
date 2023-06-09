import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitleProps {
  id: string;
  title: string;
  selftext?: string;
  previewImg?: string;
}

export function Title({title, previewImg, selftext, id}: ITitleProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <h2 className={styles.title}>
      {/* <a href="#post-url" className={styles.postLink} onClick={()=> {
        setIsModalOpen(true);
        console.log('TitleId: ', id, isModalOpen);
      }}>
        {title}
        {isModalOpen && (
          <Post id={id} title={title} previewImg={previewImg} selftext={selftext} onClose={()=> {setIsModalOpen(false)}}/>
        )}
      </a> */}
      <Link to={`/posts/${id}`}>{title}</Link>
    </h2>
  );
}
