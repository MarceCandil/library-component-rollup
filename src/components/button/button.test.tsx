import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('should render a button', () => {
    render(<Button label='Click me' />);
  });
});
