import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Layout from './Layout';
import { render, fireEvent, waitForElement } from 'utils/test-utils';

test('loads Layout and displays 1 textarea and link to a / amin page and 3 buttons', async () => {
  const { getByRole, getAllByRole } = render(<Layout />, {});
  expect(getByRole('textbox')).toBeInTheDocument();
  expect(getAllByRole('button')).toHaveLength(3);
  expect(getByRole('link')).toHaveTextContent('main page');
  expect(getByRole('link')).toHaveAttribute('href', '/');
});

test('loads Layout click on 2d btn and displays 2 textareas', async () => {
  const { getAllByRole } = render(<Layout />, {});
  expect(getAllByRole('textbox')).toHaveLength(1);
  expect(getAllByRole('button')).toHaveLength(3);
  const secondBtn = getAllByRole('button')[1];

  fireEvent.click(secondBtn);
  const textBoxes = await waitForElement(() => getAllByRole('textbox'));
  expect(textBoxes).toHaveLength(2);
});

test('loads Layout click on 3d btn and displays 3 textareas', async () => {
  const { getAllByRole } = render(<Layout />, {});
  expect(getAllByRole('textbox')).toHaveLength(1);
  expect(getAllByRole('button')).toHaveLength(3);
  const thirdBtn = getAllByRole('button')[2];

  fireEvent.click(thirdBtn);
  const textBoxes = await waitForElement(() => getAllByRole('textbox'));
  expect(textBoxes).toHaveLength(3);
});
