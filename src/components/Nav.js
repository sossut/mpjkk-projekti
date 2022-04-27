import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/search'}>Write A Review</Link>
        </li>
        <li>
          <Link to={'/Profile'}>My Profile</Link>
        </li>
        <li>
          <Link to={'/login'}>Log In</Link>
        </li>
        <li>
          <Link to={'/logout'}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
