import './App.css';
// import MediaTable from './components/MediaTable';
import MovieApiSearch from './components/MovieApiSearch';
import SearchTable from './components/SearchTable';
import {useMovieDatabase} from './hooks/ApiHooks';

function App() {
  const {movieArray, isLoaded, search} = useMovieDatabase();
  console.log('isLoaded', isLoaded);
  console.log(movieArray);
  return (
    <>
      <MovieApiSearch search={search} />
      <SearchTable movieArray={movieArray} />
    </>
  );
}

export default App;
