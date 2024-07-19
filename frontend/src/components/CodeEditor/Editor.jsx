import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

const CodeEditor = ({ file, onChange }) => {
  const { files } = useSelector((state) => state.files);

  useEffect(() => {
    if (file) {
      const currentFile = files.find((f) => f._id === file._id);
      if (currentFile) {
        onChange(currentFile.content);
      }
    }
  }, [file, files, onChange]);

  return (
    <CodeMirror
      value={file ? file.content : ''}
      options={{
        mode: file && file.type === 'js' ? 'javascript' : file.type,
        theme: 'material',
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
      }}
      onBeforeChange={(editor, data, value) => {
        onChange(value);
      }}
    />
  );
};

export default CodeEditor;
