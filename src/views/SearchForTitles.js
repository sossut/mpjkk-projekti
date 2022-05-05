import MovieApiSearch from '../components/MovieApiSearch';
import {useMovieDatabase} from '../hooks/ApiHooks';
import SearchTable from '../components/SearchTable';
import {Helmet} from 'react-helmet';

const SearchForTitles = () => {
  const {movieArray, search} = useMovieDatabase();
  return (
    <>
      <Helmet>
        <title>Write A Review</title>
      </Helmet>
      <MovieApiSearch search={search} />
      <SearchTable movieArray={movieArray} />
    </>
  );
};

export default SearchForTitles;
