import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import SearchForTitles from './views/SearchForTitles';
import WriteAReview from './views/WriteAReview';

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchForTitles />} />
        <Route path="/write" element={<WriteAReview />} />
      </Routes>
    </Router>
  );
}

export default App;
