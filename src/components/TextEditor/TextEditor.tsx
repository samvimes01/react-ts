import React, { ChangeEvent, FC, useState } from 'react';

import './TextEditor.css';

interface TextEditorProps {
  key?: number;
  className?: string;
  text: string;
  saveChanges: (part: string) => void;
}

const TextEditor: FC<TextEditorProps> = ({ text, saveChanges, className }: TextEditorProps) => {
  const [value, setValue] = useState(text);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  const savePart = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    saveChanges(event.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      onBlur={savePart}
      className={'text-editor styled-scroll ' + (className ? className : '')}
    ></textarea>
  );
};

export default TextEditor;
