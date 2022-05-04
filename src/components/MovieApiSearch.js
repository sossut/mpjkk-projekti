import {Button, Grid, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import '../index.css';

import PropTypes from 'prop-types';

// import {useNavigate} from 'react-router-dom';

// import useForm from '../hooks/FormHooks';

const MovieApiSearch = ({search}) => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useState('');

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
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <form id="searchForm" onSubmit={onSubmit}>
          <TextField
            label="Enter a movie title"
            placeholder="Search for title"
            name="TMBD-title"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            style={{
              backgroundColor: '#fff',
              color: '#000',
            }}
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
            style={{
              backgroundColor: '#f5ad42',
              color: '#000',
              border: '1px solid black',
              marginLeft: '10px',
            }}
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
