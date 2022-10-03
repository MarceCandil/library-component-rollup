import type { AriaButtonProps } from '@react-types/button';
import { ButtonHTMLAttributes } from 'react';

export type BtnSize = 'default' | 'small' | 'medium';
export enum BtnSizeEnum {
  default = 'default',
  small = 'small',
  medium = 'medium',
}

export interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: BtnSize;
}

export type ButtonProps = OwnProps & AriaButtonProps;
