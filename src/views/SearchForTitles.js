import MovieApiSearch from '../components/MovieApiSearch';
import {useMovieDatabase} from '../hooks/ApiHooks';
import SearchTable from '../components/SearchTable';
import {Helmet} from 'react-helmet';
import {MediaContext} from '../contexts/MediaContext';
import {useContext} from 'react';
import {Button, Grid} from '@mui/material';
import {Link} from 'react-router-dom';

const SearchForTitles = () => {
  const {movieArray, search} = useMovieDatabase();
  const {user} = useContext(MediaContext);
  console.log(user);
  return (
    <>
      <Helmet>
        <title>Write A Review</title>
      </Helmet>
      {user?.user_id && <MovieApiSearch search={search} />}
      {!user?.user_id && (
        <Grid container>
          <Button
            sx={{mx: 'auto'}}
            id="sign-in-btn-search"
            variant="contained"
            component={Link}
            to={'/login'}
            style={{
              backgroundColor: '#f5ad42',
              color: '#000',
              border: '1px solid black',
              marginTop: '20px',
            }}
          >
            Sign In
          </Button>
        </Grid>
      )}
      <SearchTable movieArray={movieArray} />
    </>
  );
};

export default SearchForTitles;
