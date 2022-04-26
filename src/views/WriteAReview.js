import MovieApiSearch from '../components/MovieApiSearch';
import {useMovieDatabase} from '../hooks/ApiHooks';
import {Grid} from '@mui/material';
const WriteAReview = () => {
  const {mediaArray} = useMovieDatabase();
  console.log(mediaArray);
  return (
    <>
      <MovieApiSearch />
      <Grid container></Grid>
    </>
  );
};
export default WriteAReview;
