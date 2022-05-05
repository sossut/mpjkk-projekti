import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useState} from 'react';
import {Button} from '@mui/material';
import {Container} from '@mui/material';
import {Helmet} from 'react-helmet';

const Login = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container maxWidth="xs">
        {toggle ? <LoginForm /> : <RegisterForm setToggle={setToggle} />}
        <Button
          color="primary"
          variant="contained"
          style={{
            backgroundColor: '#f5ad42',
            color: '#000',
            border: '1px solid black',
            margin: '0 auto',
            display: 'block',
          }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle
            ? 'Create account here'
            : 'already have an account? login here'}
        </Button>
      </Container>
    </>
  );
};

export default Login;
