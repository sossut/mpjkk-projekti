import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Grid, Rating} from '@mui/material';
import {posterUrl} from '../utils/variables';

const WriteAReview = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  console.log(location);
  const file = location.state.file;
  console.log(file);

  return (
    <Grid container>
      <img
        className="pic"
        src={posterUrl + file.poster_path}
        alt={file.original_title}
        height="300"
      />
      <Grid>
        <div>{file.original_title}</div>
        <div>Give a Rating</div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <form>
          <textarea rows="8" cols="75" />
        </form>
      </Grid>
    </Grid>
  );
};
export default WriteAReview;
