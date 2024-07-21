import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../store/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import './loginPage.css';
import LeftComponent from '../../screens/Home/LeftComponent';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showMessage, setShowMessage] = useState('');

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      console.error(message);
      setShowMessage(message);
    }


    if (isSuccess) {
      console.log('Logged in successfully');
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
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Container">
    <div className='leftDiv'>
    <LeftComponent />
    </div>
    <div className='rightDiv'>
      <div className="login-box">
        <section className="heading">
          <h1>Login</h1>
          <p style={{color:'red'}}>{showMessage}</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
          <div className="register-link">
            <p>Not a user yet? <NavLink to='/signup'>Register</NavLink></p>
          </div>
        </section>
      </div>
    </div>
    </div>  
  );
  
};

export default Login;
