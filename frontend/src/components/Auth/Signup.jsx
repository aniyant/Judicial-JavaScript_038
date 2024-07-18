import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (isSuccess) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.error('Passwords do not match');
    } else {
      const userData = {
        username,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '75vh',
        background: '#3c3c3c',
        borderRadius: "5px",
        boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: "#dda116", fontSize: "30px" }}>
          Sign Up
        </Typography>
        {isError && <Alert severity="error">{message}</Alert>}
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={onChange}
            sx={{
              '& .MuiInputBase-root': {
                color: '#fff',
              },
              '& .MuiFormLabel-root': {
                color: '#ddd',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#dda116',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#dda116',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={onChange}
            sx={{
              '& .MuiInputBase-root': {
                color: '#fff',
              },
              '& .MuiFormLabel-root': {
                color: '#ddd',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#dda116',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#dda116',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChange}
            sx={{
              '& .MuiInputBase-root': {
                color: "#fff",
              },
              '& .MuiFormLabel-root': {
                color: '#ddd',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#dda116',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#dda116',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm Password"
            type="password"
            id="password2"
            autoComplete="current-password"
            value={password2}
            onChange={onChange}
            sx={{
              '& .MuiInputBase-root': {
                color: "#fff",
              },
              '& .MuiFormLabel-root': {
                color: '#ddd',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ddd',
                },
                '&:hover fieldset': {
                  borderColor: '#dda116',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#dda116',
                },
              },
            }}
          />
          {isLoading ? (
            <CircularProgress style={{ color: '#dda116' }} />
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#dda116', '&:hover': { bgcolor: '#c8900d' } }}
            >
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
