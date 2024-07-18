import Signup from "../components/Auth/Signup.jsx";
import { Box } from '@mui/material'; 

const SignupPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      }}
    >
      <Signup />
    </Box>
  );
};

export default SignupPage;
