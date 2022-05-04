import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Grid, Rating, Button, TextareaAutosize} from '@mui/material';
import {appID, posterUrl} from '../utils/variables';
// import {Link} from 'react-router-dom';
import {useMedia, useTag} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';
import useForm from '../hooks/FormHooks';

const WriteAReview = () => {
  const initValues = {
    title: '',
    description: '',
    file: null,
  };

  const {postMedia} = useMedia();
  const {postTag} = useTag();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  const location = useLocation();
  console.log(location);
  const file = location.state.file;

  const doUpload = async () => {
    try {
      console.log(file);
      const desc = {
        description: inputs.description,
        original_title: file.original_title,
        movie_id: file.id,
        genre_ids: file.genre_ids,
        rating: value,
        release_date: file.release_date,
      };
      const token = localStorage.getItem('token');
      console.log('token', token);
      const formdata = new FormData();
      const fileResponse = await fetch(posterUrl + file.poster_path);
      const blob = await fileResponse.blob();
      const tiedosto = new File([blob], file.poster_path, {
        type: 'image/jpeg',
      });

      formdata.append('title', file.title);

      formdata.append('description', JSON.stringify(desc));

      formdata.append('file', tiedosto);

      const mediaData = await postMedia(formdata, token);

      const tagData = await postTag(
        {
          file_id: mediaData.file_id,
          tag: appID,
        },
        token
      );
      confirm(tagData.message) && navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };
  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    initValues
  );

  useEffect(() => {
    //
  }, [inputs.file]);

  return (
    <Grid
      container
      sx={{
        padding: '30px',
      }}
    >
      <img
        className="pic"
        src={posterUrl + file.poster_path}
        alt={file.original_title}
        height="300"
      />
      <Grid
        item={12}
        sx={{
          padding: '15px',
          width: '40vh',
        }}
      >
        <h4>{file.title} </h4>
        <form
          onSubmit={handleSubmit}
          sx={{
            margin: '0',
          }}
        >
          <div>Give a Rating</div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <TextareaAutosize
            minRows="10"
            placeholder="Write a review"
            fullWidth
            name="description"
            onChange={handleInputChange}
            value={inputs.description}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: '#f5ad42',
              color: '#000',
              border: '1px solid black',
              margin: '0 auto',
              display: 'block',
            }}
          >
            Publish
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
export default WriteAReview;
