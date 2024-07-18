import Login from "../components/Auth/Login.jsx";
import { Box } from '@mui/material'; // Import Box for easier centering

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Adjust height as needed
      }}
    >
      <Login />
    </Box>
  );
};

export default LoginPage;
