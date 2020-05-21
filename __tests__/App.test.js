import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/app';

test('renders say hello world!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toContain(/Say Hello World/i);
});
