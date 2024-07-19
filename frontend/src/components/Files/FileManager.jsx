import { useDispatch, useSelector } from 'react-redux';
import { getFiles, createFile, renameFile, deleteFile, reset } from '../../store/fileSlice';
import { useEffect, useState } from 'react';

const FileManager = () => {
  const dispatch = useDispatch();
  const { files, isLoading, isError, message } = useSelector((state) => state.files);
  const [newFileName, setNewFileName] = useState('');
  const [selectedFileId, setSelectedFileId] = useState('');
  const [newName, setNewName] = useState('');

  useEffect(() => {
    dispatch(getFiles());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const handleCreateFile = (type) => {
    dispatch(createFile({ name: newFileName, type }));
    setNewFileName('');
  };

  const handleRenameFile = () => {
    dispatch(renameFile({ id: selectedFileId, newName }));
    setNewName('');
    setSelectedFileId('');
  };

  const handleDeleteFile = (id) => {
    dispatch(deleteFile({ id }));
  };

  return (
    <div>
      <h2>File Manager</h2>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {message}</div>}

      <div>
        <input
          type="text"
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          placeholder="New file/folder name"
        />
        <button onClick={() => handleCreateFile('file')}>Create File</button>
        <button onClick={() => handleCreateFile('folder')}>Create Folder</button>
      </div>

      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New name"
        />
        <button onClick={handleRenameFile}>Rename</button>
      </div>

      <div>
        <ul>
          {files.map((file) => (
            <li key={file._id}>
              {file.name}
              <button onClick={() => handleDeleteFile(file._id)}>Delete</button>
              <button onClick={() => setSelectedFileId(file._id)}>Select for Rename</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileManager;
