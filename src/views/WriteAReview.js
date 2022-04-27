import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Grid, Rating, Button} from '@mui/material';
import {posterUrl} from '../utils/variables';
import {Link} from 'react-router-dom';

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
        <form>
          <div>Give a Rating</div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <textarea rows="8" cols="75" />
          <Button
            variant="contained"
            component={Link}
            to={'/single'}
            state={{file}}
          >
            Publish
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
export default WriteAReview;
