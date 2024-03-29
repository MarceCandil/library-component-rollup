import { useButton } from '@react-aria/button';
import * as React from 'react';

import type { ButtonProps } from './Button.types';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({ size = 'default', backgroundColor, ...props }) => {
  let ref = React.useRef<HTMLButtonElement>(null);
  let { buttonProps, isPressed } = useButton(props, ref);

  return (
    <button
      ref={ref}
      style={{ background: isPressed ? 'red' : backgroundColor }}
      className={['button', `${size ? `size-${size}` : ''}`].join(' ')}
      {...buttonProps}
    >
      {props.children}
    </button>
  );
};

export default Button;
