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
    <Container maxWidth="xs">
      <Typography component="h1" variant="h3" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          size="small"
          margin="dense"
          label="username"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <TextField
          fullWidth
          size="small"
          margin="dense"
          label="password"
          placeholder="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <Button fullWidth color="primary" type="submit" variant="contained">
          Login
        </Button>
      </form>
    </Container>
  );
};
LoginForm.propTypes = {};

export default LoginForm;
