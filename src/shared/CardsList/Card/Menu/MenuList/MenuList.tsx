import React from 'react';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { Break } from '../../../../Break';
import { GenericList, IItem } from '../../../../GenericList/GenericList';
import { EIcons, Icon } from '../../../../Icon';
import { BlockIcon } from '../../../../Icons';
import { CommentsIcon } from '../../../../Icons/CommentsIcon';
import { EColors, Text } from '../../../../Text';
import styles from './menulist.css';

interface IMenuItemsListProps {
  postId: string;
}


export function MenuList({postId}:IMenuItemsListProps) {
  const menuItems:IItem[] = [
    {element:  <Icon name={EIcons.comments} size={14} />, padding: <Break size={8} inline/> ,text: <Text size={12} color={EColors.grey99}>Комментарии</Text>,  className: `${styles.menuItem}`, as: 'li', onClick: ()=> console.log(postId)},
    {element:  <Icon name={EIcons.share} size={14} />, padding: <Break size={8} inline/> , text: <Text size={12} color={EColors.grey99}>Поделиться</Text>, className: styles.menuItem,  as: 'li', onClick: ()=> console.log(postId)},
    {element:  <Icon name={EIcons.block} size={14} />, padding: <Break size={8} inline/> ,text: <Text size={12} color={EColors.grey99}>Скрыть</Text>, className: styles.menuItem,  as: 'li', onClick: ()=> console.log(postId)},
    {element:  <Icon name={EIcons.save} size={14} />, padding: <Break size={8} inline/> , text: <Text size={12} color={EColors.grey99}>Сохранить</Text>, className: styles.menuItem,  as: 'li', onClick: ()=> console.log(postId)},
    {element:  <Icon name={EIcons.warning} size={14} />, padding: <Break size={8} inline/> , text: <Text size={12} color={EColors.grey99}>Пожаловаться</Text>, className: styles.menuItem,  as: 'li', onClick: ()=> console.log(postId)},
    // {text: 'Закрыть', className: `${styles.listItem} ${styles.listItemClose}`, as: 'div', onClick: ()=> console.log('closedclosed')}
  ].map(generateId);


  return (
    <ul className={styles.menuItemsList}>
        <GenericList list={menuItems} />
    </ul>
  );
}