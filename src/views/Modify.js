import {Grid, Typography, Button, Rating} from '@mui/material';
import {useMedia} from '../hooks/ApiHooks';
import {useNavigate, useLocation} from 'react-router-dom';
import useForm from '../hooks/FormHooks';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {safeParseJson} from '../utils/functions';
import {useState} from 'react';
// import BackButton from '../components/BackButton';

const Modify = () => {
  const location = useLocation();
  const file = location.state.file;
  const desc = safeParseJson(file.description) || {
    description: file.description,
    rating: file.rating,
    orignal_title: file.orignal_title,
    release_date: file.release_year,
    genre_ids: file.genre_ids,
  };

  console.log(file);
  console.log(desc);
  const alkuarvot = {
    title: file.title,
    description: desc,
  };

  const validators = {
    title: ['required', 'minStringLength: 3'],
    description: ['minStringLength: 1'],
  };

  const errorMessages = {
    username: ['required field', 'minimum 3 characters'],
    description: ['minimum 1 characters'],
  };

  const {putMedia} = useMedia();
  const navigate = useNavigate();
  const [value, setValue] = useState(desc.rating);
  // eslint-disable-next-line no-unused-vars
  const [originalTitle, setOriginalTitle] = useState(desc.orignal_title);
  // eslint-disable-next-line no-unused-vars
  const [releaseDate, setReleaseDate] = useState(desc.release_date);
  // eslint-disable-next-line no-unused-vars
  const [genreIds, setGenreIds] = useState(desc.genre_ids);
  const doModify = async () => {
    try {
      console.log(file);
      console.log('doModify');
      // lisätään filtterit descriptioniin
      const desc = {
        description: inputs.description,
        rating: value,
        original_title: originalTitle,
        release_date: releaseDate,
        genre_ids: genreIds,
      };
      // tee sopiva objekti lähetettäväksi
      const data = {
        title: inputs.title,
        description: JSON.stringify(desc),
      };
      console.log(desc);
      const token = localStorage.getItem('token');
      const mediaData = await putMedia(file.file_id, data, token);
      confirm(mediaData.message) && navigate(-1);
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doModify,
    alkuarvot
  );

  console.log(inputs);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/* <BackButton /> */}
          <Typography component="h1" variant="h2" gutterBottom>
            Modify
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <ValidatorForm onSubmit={handleSubmit}>
            <div>Give a Rating</div>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <TextValidator
              fullWidth
              placeholder={desc.description}
              name="description"
              onChange={handleInputChange}
              value={inputs.description}
              validators={validators.description}
              errorMessages={errorMessages.description}
            />
            <Button fullWidth color="primary" type="submit" variant="contained">
              Save
            </Button>
          </ValidatorForm>
        </Grid>
      </Grid>
    </>
  );
};

export default Modify;
