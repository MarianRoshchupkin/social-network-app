import React from 'react';
import styles from './genericlist.css';

interface IItem {
  As?: 'a' | 'li' | 'button' | 'div';
  className?: string;
  href?: string;
  id: string;
  onClick: (id: string) => void;
  text: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({As= 'div', text, onClick, className, id, href
      }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  )
}
