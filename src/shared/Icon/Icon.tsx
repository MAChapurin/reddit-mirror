import React from "react";
import classNames from 'classnames';
import styles from './icon.css';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, TriangleIcon, WarningIcon } from "../Icons";

type TIconSizes = 20 | 16 | 14 | 12 | 10;

interface IIconProps {
    name: EIcons;
    size: TIconSizes;
    mobileSize?: TIconSizes;
    tabletSize?: TIconSizes;
    desktopSize?: TIconSizes;
}

export enum EIcons {
    block = 'BlockIcon',
    warning = 'warning',
    comments = 'comments',
    share = 'share',
    save = 'save',
    triangle = 'triangle'
}

const icons = {
    [EIcons.block]: <BlockIcon/>,
    [EIcons.warning]: <WarningIcon/>,
    [EIcons.comments]: <CommentsIcon/>,
    [EIcons.share]: <ShareIcon/>,
    [EIcons.save]: <SaveIcon/>,
    [EIcons.triangle]: <TriangleIcon/>
}


export function Icon(props: IIconProps) {
    const {
        name,
        size,
        mobileSize,
        tabletSize,
        desktopSize,
    } = props;

    return (
        <div className={`${classNames(
            styles[`s${size}`],
            { [styles[`m${mobileSize}`]]: mobileSize },
            { [styles[`t${tabletSize}`]]: tabletSize },
            { [styles[`d${desktopSize}`]]: desktopSize },

        )} ${styles.iconWrapper}`}>
            {icons[name]}
        </div>
    )
}

// function getIconByName(name: EIcons | null): React.ReactNode {
//     switch (name) {
//         case EIcons.block:
//             return <BlockIcon />
//         case EIcons.warning:
//             return <WarningIcon />
//         case EIcons.comments:
//             return <CommentsIcon/>
//         case EIcons.share:
//             return <ShareIcon/>
//         case EIcons.save:
//             return <SaveIcon/>
//         default:
//             return null;
//     }

// }