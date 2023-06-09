import React from "react";

export interface IItem {
    id: string;
    element?: React.ReactNode;
    padding?: React.ReactNode;
    text?: React.ReactNode | string;
    onClick: (id: string)=> void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

export interface IGenericListProps {
    list: IItem[];
    // onClick: (id:string)=> void;
}


export function GenericList({list}: IGenericListProps) {
    return (
        <>
        {list.map(({ As = 'div', element = null, text = '', padding = null, onClick, className, id, href }) => (
            <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
            >
                {element}{padding}{text}
            </As>
        ))}
        </>
    );
}