import Link from 'next/link';
import React from 'react';

import styled  from 'styled-components';
import { Icons } from '../../../common/Icons';
import { IconWrapper } from './Icon.styled';


export enum IconSize{ 
  XSmall = 'xsmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xlarge',
  XXLarge = 'xxlarge',
  Auto = 'auto'
}


export interface IIconProps {
  name: string;
  className?: string;
  size?: IconSize;
  color?: string;
  colored?:boolean;
}

export const Icon: React.FC<IIconProps> = ({
  name, size = IconSize.Medium, color = "#000", className, colored = false
}) => {

  const IconClassNames = (): string => {
    return `icon ${size} ${className} ${colored ? 'colored' : ''}`;
  };

  const getIcon = (name:string):HTMLOrSVGElement => {
    return Icons[name]();
  }
  
  return <IconWrapper className={IconClassNames()}>{getIcon(name)}</IconWrapper>;
};