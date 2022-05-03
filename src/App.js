import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Single from './views/Single';
import {MediaProvider} from './contexts/MediaContext';
import SearchForTitles from './views/SearchForTitles';
import WriteAReview from './views/WriteAReview';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Modify from './views/Modify';
import TopMovies from './views/TopMovies';

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchForTitles />} />
          <Route path="/write" element={<WriteAReview />} />
          <Route path="/single" element={<Single />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/top" element={<TopMovies />} />
        </Routes>
      </MediaProvider>
    </Router>
  );
}

export default App;
