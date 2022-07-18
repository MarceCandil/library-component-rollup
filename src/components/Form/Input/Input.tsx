import {useTextField} from '@react-aria/textfield'
import * as React from 'react';

import { InputProps } from './Input.types';

import './Input.scss';

const Input = (props: InputProps) => {
  let {label} = props;
  let ref = React.useRef<HTMLInputElement>(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
  useTextField(props, ref);

  return (
    <div className='input-container'>
      <label {...labelProps}>{label}</label>
      <div>
        <input {...inputProps} ref={ref} />
        {props.description && (
          <div className='description' {...descriptionProps}>
            {props.description}
          </div>
        )}
        {props.errorMessage &&
          (
            <div className='error-message' {...errorMessageProps}>
              {props.errorMessage}
            </div>
          )}
      </div>
    </div>
  );
}

export default Input


{/* <TextField 
  label="Email"
  placeholder="abc@example.com" /> */}