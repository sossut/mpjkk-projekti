import MediaTable from '../components/MediaTable';
import {Typography} from '@mui/material';
import MovieApiSearch from '../components/MovieApiSearch';

const Home = () => {
  return (
    <>
      <Typography component="h1" variant="h2">
        Home
      </Typography>
      <MovieApiSearch />
      <MediaTable />
    </>
  );
};

export default Home;
