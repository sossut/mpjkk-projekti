import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';

const Logout = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  setUser(null);
  localStorage.clear();
  return <>{!user ? <Navigate to="/" /> : <div>Loading</div>}</>;
};

Logout.propTypes = {};

export default Logout;
