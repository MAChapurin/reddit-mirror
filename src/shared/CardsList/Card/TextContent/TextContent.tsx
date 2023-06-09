import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';

interface ITextContentProps {
  id: string;
  title: string;
  selftext?: string;
  author: string;
  avatar: string;
  datePostUtc: number;
  previewImg?: string;
}

export function TextContent({id, title, previewImg, selftext, author, avatar, datePostUtc}:ITextContentProps) {
  return (
    <div className={styles.textContent}>
    <div className={styles.metaData}>
     <UserLink author={author} avatar={avatar}/>
      <span className={styles.createAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {new Date(new Date().getTime() - new Date(datePostUtc).getTime()).getHours()} часа назад
      </span>
    </div>
   <Title title={title} previewImg={previewImg}  selftext={selftext} id={id}/>
  </div>
  );
}
