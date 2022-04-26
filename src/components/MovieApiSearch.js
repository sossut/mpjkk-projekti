import {Button, Grid, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

// import {useNavigate} from 'react-router-dom';

// import useForm from '../hooks/FormHooks';

const MovieApiSearch = ({search}) => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState('');
  console.log('MovieApiSearch', query);
  const onSubmit = (e) => {
    e.persist();
    e.preventDefault();
    search(query);
  };
  useEffect(() => {
    // search(query);
  }, [query]);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" gutterBottom>
          Write A Review
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={onSubmit}>
          <TextField
            label="Enter a movie title"
            placeholder="Search for title"
            name="TMBD-title"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
            // onClick={search}
          >
            Search
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
MovieApiSearch.propTypes = {
  search: PropTypes.func,
};
export default MovieApiSearch;
