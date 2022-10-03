import { render } from '@testing-library/react';
import * as React from 'react';

import Button from './index';

describe('Button', () => {
  it('should render a button', () => {
    const BtnName = 'Click me';
    const { getByText } = render(<Button>{BtnName}</Button>);
    expect(getByText(BtnName)).toBeInTheDocument();
  });
});
