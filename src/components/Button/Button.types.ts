import { MouseEventHandler } from 'react';

export type BtnSize = 'default' | 'small' | 'medium';
export enum BtnSizeEnum {
  default = 'default',
  small = 'small',
  medium = 'medium',
}

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: BtnSize;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
