import React, { FC, useContext } from 'react';
import { ProviderStore, LayoutTextContext } from '../../contextStore/TextStoreProvider';

import InnerLink from '../../components/InnerLink/InnerLink';
import TextEditor from 'components/TextEditor/TextEditor';
import './Home.css';

const Home: FC = () => {
  const { textStore } = useContext<ProviderStore>(LayoutTextContext);
  const [text, setText] = textStore;

  return (
    <div className="home-page">
      <TextEditor text={text} saveChanges={setText} className="home-page_editor" />
      <InnerLink to="layout">layout</InnerLink>
    </div>
  );
};

export default Home;
