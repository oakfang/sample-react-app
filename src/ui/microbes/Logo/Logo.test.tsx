import React from 'react';
import { render } from 'test-utils';
import { Logo } from 'ui/microbes/Logo';

test('renders without a crash', () => {
  render(<Logo />);
});

test('Logo is visible', () => {
  const { queryByAltText } = render(<Logo />);
  const logo = queryByAltText('microbes.Logo.title');
  expect(logo).not.toBeNull();
  expect(logo).toBeVisible();
});
