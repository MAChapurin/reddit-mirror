import React from 'react';
import { IPostData } from '../../../hooks/usePostData';
import { IBestPostContextData } from '../../context/bestPostContext';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  id: string;
  author?: string;
  title?: string;
  selftext?: string;
  rating?: number;
  avatar?: string;
  datePostUtc?: number;
  previewImg?: string;
}

export function Card({ id,
  author,
  title,
  selftext,
  rating,
  avatar,
  datePostUtc,
  previewImg }: ICardProps) {
    
  return (
    <li className={styles.card}>
      <TextContent
        id={id}
        title={title ? title : 'Your post could be here'}
        selftext={selftext ? selftext : ''}
        author={author ? author : 'Аноним'} avatar={avatar ? avatar : ''}
        datePostUtc={datePostUtc ? datePostUtc : 0}
        previewImg={previewImg} />
      <Preview previewImg={previewImg} />
      <Menu id={id}/>
      <Controls rating={rating ? rating : 0} />
    </li>
  );
}
