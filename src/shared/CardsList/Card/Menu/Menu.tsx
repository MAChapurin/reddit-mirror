import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuList } from './MenuList';
import { MenuIcon } from '../../../Icons/';
import { Text, EColors } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';

interface IMenuProps {
  id: string;
}

export function Menu({id}:IMenuProps) {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon/>
          </button>
        }
      >  
     <div className={styles.dropdown}>
      <MenuList postId={id}/>
    {/* <MenuItemsList postId='id123'/> */}
      <button className={styles.closeButton}>
      <Text mobileSize={12} size={14} color={EColors.grey66}>
        Закрыть</Text> 
      </button>
     </div>

      </Dropdown>

    </div>
  );
}
