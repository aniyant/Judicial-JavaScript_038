import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CodeEditor from '../components/Editor/CodeEditor';
import { updateFileContent } from '../store/fileSlice';

const EditorPage = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.files);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleEditorChange = (content) => {
    if (selectedFile) {
      dispatch(updateFileContent({ ...selectedFile, content }));
    }
  };

  return (
    <>
    <Navbar/>
    <div>
      <div>
        <ul>
          {files.map((file) => (
            <li key={file._id} onClick={() => handleFileSelect(file)}>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedFile && (
        <div>
          <CodeEditor file={selectedFile} onChange={handleEditorChange} />
        </div>
      )}
    </div>
    </>
  );
};

export default EditorPage;
