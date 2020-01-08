import React from 'react';
import { render } from 'utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

test('loads App and displays textarea and link to a /layout', async () => {
  const { getByRole } = render(<App />, {});
  expect(getByRole('textbox')).toBeInTheDocument();
  expect(getByRole('link')).toHaveTextContent('layout');
  expect(getByRole('link')).toHaveAttribute('href', '/layout');
});
