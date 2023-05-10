import React from 'react';

export enum EIcons {
  anon = 'anonIcon',
  block= 'blockIcon',
  comments = 'commentsIcon',
  menu = 'menuIcon',
  reply = 'replyIcon',
  save = 'saveIcon',
  share = 'shareIcon',
  warning = 'warningIcon',
}

interface IIconProps {
  name: EIcons;
  size: number;
}

export function Icon({ name, size }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
    >
      <use href={`#${name}`} />
    </svg>
  );
}
