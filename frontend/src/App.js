import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Playground from './screens/Playground';
import Error404 from './screens/Error404';
import { GlobalStyle } from './style/global';
import ModalProvider from './context/ModalContext';
import PlaygroundProvider from './context/PlaygroundContext';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
    <PlaygroundProvider>
      <ModalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/playground/:folderId/:playgroundId" element={<PrivateRoute><Playground /></PrivateRoute>} />
            <Route path="*" element={<Error404 />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
    </AuthProvider>
    </Provider>
  );
}

export default App;
