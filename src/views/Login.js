import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useState} from 'react';
import {Button} from '@mui/material';
import {Container} from '@mui/material';

const Login = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Container maxWidth="xs">
        {toggle ? <LoginForm /> : <RegisterForm setToggle={setToggle} />}
        OR
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? 'Register' : 'Login'}
        </Button>
      </Container>
    </>
  );
};

export default Login;
