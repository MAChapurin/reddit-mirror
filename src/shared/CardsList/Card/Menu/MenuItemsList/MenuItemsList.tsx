import React from "react";
import { Break } from "../../../../Break";
import { EIcons, Icon } from "../../../../Icon";
import { BlockIcon, CommentsIcon, WarningIcon } from "../../../../Icons";
import { EColors, Text } from "../../../../Text";
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({postId}:IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>
            <li className={styles.menuItem} onClick={()=> console.log(postId)}>
            <Icon name={EIcons.comments} size={14} />
                <Break size={8} inline/>
                <Text size={12} color={EColors.grey99}>Комментарии</Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={()=> console.log(postId)}>
            <Icon name={EIcons.share} size={14}/>
                <Break size={8} inline/>
                <Text size={12} color={EColors.grey99}>Поделиться</Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={()=> console.log(postId)}>
                <Icon name={EIcons.block} size={14}/>
                <Break size={8} inline/>
                <Text size={12} color={EColors.grey99}>Скрыть</Text>
            </li>

            <div className={styles.divider} />


            <li className={styles.menuItem} onClick={()=> console.log(postId)}>
            <Icon name={EIcons.save} size={14}/>
                <Break size={8} inline/>
                <Text size={12} color={EColors.grey99}>Сохранить</Text>
            </li>

            <div className={styles.divider} />
            
            <li className={styles.menuItem} onClick={()=> console.log(postId)}>
                <Icon name={EIcons.warning} size={14}/>
                <Break size={8} inline/>
                <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
            </li>
        </ul>
    )
}