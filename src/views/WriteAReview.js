import MovieApiSearch from '../components/MovieApiSearch';
import {useMovieDatabase} from '../hooks/ApiHooks';
import SearchTable from '../components/SearchTable';
const WriteAReview = () => {
  const {movieArray, search} = useMovieDatabase();
  console.log(movieArray);
  return (
    <>
      <MovieApiSearch search={search} />
      <SearchTable movieArray={movieArray} />
    </>
  );
};
export default WriteAReview;
