import React, { useContext, useState } from 'react';

import InnerLink from '../../components/InnerLink/InnerLink';
import { LayoutTextContext, ProviderStore } from '../../contextStore/TextStoreProvider';

import TextEditor from 'components/TextEditor/TextEditor';
import IconButton from 'components/IconButton/IconButton';
import getSplittedStringChunks from 'utils/getSplittedStringChunks';
import './Layout.css';

type ChunksCount = 1 | 2 | 3;
type SaveChunkFn = (chunk: string) => void;
type SaveChunkFnClosure = (i: number) => SaveChunkFn;

const Layout: React.FC = () => {
  const { textStore } = useContext<ProviderStore>(LayoutTextContext);
  const [text, setText] = textStore;
  const [textChunksCount, setChunksCount] = useState<ChunksCount>(1);

  const textChunks = getSplittedStringChunks(text, textChunksCount);

  const savePart: SaveChunkFnClosure = (chunkIndex: number): SaveChunkFn => (chunk: string): void => {
    textChunks[chunkIndex] = chunk;
    setText(textChunks.join(''));
  };

  const editorItems = Array.from({ length: textChunksCount }, (_, i: number) => (
    <TextEditor key={Date.now() + i * 2} text={textChunks[i]} saveChanges={savePart(i)} />
  ));

  const chunksSetupButtons = Array.from({ length: 3 }, (_, i: number) => (
    <IconButton key={i} onClick={(): void => setChunksCount((i + 1) as ChunksCount)} iconNumber={i + 1} />
  ));

  return (
    <>
      <div className="layout_editor-items">{editorItems}</div>
      <p>Select columns amount: </p>
      <div className="layout_layout-buttons">{chunksSetupButtons}</div>
      <InnerLink to="/">main page</InnerLink>
    </>
  );
};

export default Layout;
