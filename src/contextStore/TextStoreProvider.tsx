import React, { Dispatch, SetStateAction, createContext, FC, useState } from 'react';

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface ProviderStore {
  textStore: [string, Dispatch<SetStateAction<string>>];
}

export const LayoutTextContext = createContext<ProviderStore>({} as ProviderStore);

export const TextStoreProvider: FC<ProviderProps> = ({ children }: ProviderProps) => {
  const store: ProviderStore = {
    textStore: useState<string>(''),
  };

  return <LayoutTextContext.Provider value={store}>{children}</LayoutTextContext.Provider>;
};
