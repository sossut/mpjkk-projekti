import React, {useContext, useEffect} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useMovieDatabase, useUser} from '../hooks/ApiHooks';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  LogoutBtn,
} from './NavbarElements';

const Navbar = () => {
  const {setGenres, setUser} = useContext(MediaContext);
  const {getUser} = useUser();
  const {getGenres} = useMovieDatabase();
  useEffect(() => {
    const fetchGenres = async () => {
      setGenres(await getGenres());
    };
    const fetchUser = async () => {
      const userData = await getUser(localStorage.getItem('token'));
      setUser(userData);
    };
    fetchGenres();
    fetchUser();
  }, []);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>FilmSTAR</h1>
        </NavLink>
        <NavMenu>
          <NavLink to="/search" activeStyle>
            Write A Review
          </NavLink>
          <NavLink to="/profile" activeStyle>
            My Profile
          </NavLink>
          <NavLink to="/top" activeStyle>
            Top Movies
          </NavLink>
        </NavMenu>
        <NavMenu>
          <LogoutBtn>
            <NavBtnLink to="/logout">Logout</NavBtnLink>
          </LogoutBtn>
          <NavBtn>
            <NavBtnLink to="/login">Sign In / Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
