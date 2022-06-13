import * as React from 'react';
import './Button.scss';

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button = ({ backgroundColor, size = 'large', label, ...props }: ButtonProps) => (
  <button
    type='button'
    className={['button', `button--${size}`, 'button--primary'].join(' ')}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);

export default Button;
