import type { AriaButtonProps } from '@react-types/button';

export type BtnSize = 'default' | 'small' | 'medium';
export enum BtnSizeEnum {
  default = 'default',
  small = 'small',
  medium = 'medium',
}

export interface OwnProps {
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
}

export type ButtonProps = OwnProps & AriaButtonProps;
