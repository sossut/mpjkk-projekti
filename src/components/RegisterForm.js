// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {useUser} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import {Container} from '@mui/material';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {useEffect} from 'react';

const RegisterForm = ({setToggle}) => {
  const alkuarvot = {
    username: '',
    password: '',
    confirm: '',
    email: '',
    full_name: '',
  };

  const validators = {
    username: ['required', 'minStringLength: 3', 'isAvailable'],
    password: ['required', 'minStringLength: 5'],
    confirm: ['required', 'isPasswordMatch'],
    email: ['required', 'isEmail'],
    full_name: ['minStringLength: 3'],
  };

  const errorMessages = {
    username: [
      'required field',
      'minimum 3 characters',
      'usename not available',
    ],
    password: ['required field', 'minimum 5 characters'],
    confirm: ['required field', 'passwords do not match'],
    email: ['required field', 'not email address'],
    full_name: ['minimum 3 characters'],
  };

  const {postUser, getUsername} = useUser();

  const doRegister = async () => {
    console.log('doRegister');
    try {
      delete inputs.confirm;
      const userData = await postUser(inputs);
      userData && setToggle(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    alkuarvot
  );

  useEffect(() => {
    ValidatorForm.addValidationRule('isAvailable', async (value) => {
      try {
        return await getUsername(value);
      } catch (err) {
        return true;
      }
    });

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      console.log('validator', value, inputs.password);
      return value === inputs.password ? true : false;
    });

    return () => {
      ValidatorForm.removeValidationRule('isAvailable');
    };
  }, [inputs]);

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
        Register
      </Typography>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          fullWidth
          size="small"
          margin="dense"
          placeholder="Username"
          label="Username"
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
          validators={validators.username}
          errorMessages={errorMessages.username}
          sx={{backgroundColor: '#fff'}}
        />
        <TextValidator
          fullWidth
          size="small"
          margin="dense"
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
          validators={validators.password}
          errorMessages={errorMessages.password}
          sx={{backgroundColor: '#fff'}}
        />
        <TextValidator
          fullWidth
          size="small"
          margin="dense"
          label="Re-type password"
          placeholder="Re-type password"
          name="confirm"
          type="password"
          onChange={handleInputChange}
          value={inputs.confirm}
          validators={validators.confirm}
          errorMessages={errorMessages.confirm}
          sx={{backgroundColor: '#fff'}}
        />
        <TextValidator
          fullWidth
          size="small"
          margin="dense"
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={inputs.email}
          validators={validators.email}
          errorMessages={errorMessages.email}
          sx={{backgroundColor: '#fff'}}
        />
        <TextValidator
          fullWidth
          margin="dense"
          size="small"
          label="Full name"
          placeholder="Full name"
          name="full_name"
          onChange={handleInputChange}
          value={inputs.full_name}
          validators={validators.full_name}
          errorMessages={errorMessages.full_name}
          sx={{backgroundColor: '#fff'}}
        />
        <Button
          fullWidth
          color="primary"
          type="submit"
          variant="contained"
          sx={{
            marginTop: '15px',
          }}
        >
          Register
        </Button>
      </ValidatorForm>
    </Container>
  );
};

RegisterForm.propTypes = {
  setToggle: PropTypes.func,
};

export default RegisterForm;
