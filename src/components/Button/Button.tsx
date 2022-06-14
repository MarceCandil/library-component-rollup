import * as React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const { backgroundColor, size = 'small', label } = props;

  return (
    <button
    type='button'
    className={['button', `button--${size}`, 'button--primary'].join(' ')}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
  )
};

export default Button;
