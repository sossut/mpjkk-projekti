import {Button, Grid, TextField, Typography} from '@mui/material';
import {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import {fetchJson} from '../hooks/ApiHooks';

// import useForm from '../hooks/FormHooks';

const MovieApiSearch = () => {
  const [query, setQuery] = useState('');
  const [movieArray, setMovieArray] = useState([]);

  const search = async () => {
    try {
      console.log(query);
      const results = await fetchJson(
        `https://api.themoviedb.org/3/search/movie?api_key=c625771482c38e59b7374dd1c48d75e3&query=${query}`
      );
      setMovieArray(results);
      console.log(results);
    } catch (error) {
      console.log('fetch failed');
    }
    return {movieArray};
  };
  const onSubmit = (e) => {
    e.preventDefault();
    search();
  };
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
          />
          <Button color="primary" type="submit" variant="contained">
            Search
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
export default MovieApiSearch;
