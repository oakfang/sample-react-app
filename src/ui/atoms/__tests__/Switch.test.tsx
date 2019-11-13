import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from 'test-utils';
import { Switch } from 'ui/atoms/Switch';

test('renders without a crash', () => {
  render(<Switch value={false} onChange={() => null} />);
});

test('clicking the switch calls cb', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<Switch value={false} onChange={onChange} />);
  const switchElement = getByRole('switch');
  expect(switchElement).toHaveAttribute('aria-checked', 'false');
  fireEvent.click(switchElement, {});
  expect(onChange).toHaveBeenCalledWith(true);
});
