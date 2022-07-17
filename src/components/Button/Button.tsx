import * as React from 'react';

import { ButtonProps } from './Button.types';
import './Button.scss';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    label = 'Button',
    size = 'default',
    className,
    backgroundColor,
  } = props;

  return (
    <button
      type='button'
      data-testid="button"
      className={[
        'button',
        `${size ? `size-${size}` : ''}`,
        `${className ? className : ''}`,
      ].join(' ')}
      style={{ background: backgroundColor }}
    >
      <span className='btn-text'>{label}</span>
    </button>
  );
};

export default Button;
