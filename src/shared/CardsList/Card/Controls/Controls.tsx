import React from 'react';
import { CommentsButton } from './CommentsButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlsProps {
  rating: number;
}

export function Controls({rating}: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter rating={rating}/>
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
