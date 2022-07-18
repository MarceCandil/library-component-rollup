import type { AriaTextFieldProps } from '@react-types/textfield';

export interface OwnProps {
  /**
   * label
   */
  label?: string;
}

export type InputProps = OwnProps & AriaTextFieldProps;
