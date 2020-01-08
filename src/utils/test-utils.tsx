import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { TextStoreProvider } from '../contextStore/TextStoreProvider';

const Providers: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <TextStoreProvider>{children}</TextStoreProvider>;
};

const customRender = (ui: any, options: any): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
