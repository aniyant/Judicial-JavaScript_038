import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Editor from './pages/Editor';
import './App.css'
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import FileManager from './components/Files/FileManager.jsx';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/editor" element={<Editor />} /> */}
      <Route path="/files" element={<FileManager />} />
    </Routes>
    </>
  );
};

export default App
