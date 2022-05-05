import React, {useContext} from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useLogin} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {Button, Container, TextField, Typography} from '@mui/material';

const LoginForm = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {user, setUser} = useContext(MediaContext);
  const alkuarvot = {
    username: '',
    password: '',
  };

  const {postLogin} = useLogin();
  const navigate = useNavigate();

  const doLogin = async () => {
    console.log('doLogin');
    try {
      const userData = await postLogin(inputs);

      localStorage.setItem('token', userData.token);
      setUser(userData.user);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, alkuarvot);
  console.log(inputs);
  return (
    <Container
      maxWidth="xs"
      sx={{
        padding: '20px',
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: 'center',
        }}
        gutterBottom
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          size="small"
          margin="dense"
          label="Username"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
          sx={{backgroundColor: '#fff'}}
        />
        <TextField
          fullWidth
          size="small"
          margin="dense"
          label="Password"
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
          sx={{backgroundColor: '#fff'}}
        />
        <Button
          fullWidth
          color="primary"
          type="submit"
          variant="contained"
          sx={{
            marginTop: '15px',
            fontWeight: 'bold',
            letterSpacing: '2px',
          }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};
LoginForm.propTypes = {};

export default LoginForm;
