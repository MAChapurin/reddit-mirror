import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './karmacounter.css';

interface IKarmaCounterProps {
  rating: number;
}

export function KarmaCounter({rating}: IKarmaCounterProps) {
  return (
    <div className={styles.karmaCounter}>
      <button className={styles.up}>
        <Icon name={EIcons.triangle} size={20} />
      </button>
      <span className={styles.karmaValue}>{rating}</span>
      <button className={styles.down}>
        <Icon name={EIcons.triangle} size={20} />
      </button>
    </div>
  );
}
