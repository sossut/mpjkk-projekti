import React, {useContext, useEffect} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {useMovieDatabase} from '../hooks/ApiHooks';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  const {setGenres} = useContext(MediaContext);
  const {getGenres} = useMovieDatabase();
  useEffect(() => {
    const fetchGenres = async () => {
      setGenres(await getGenres());
    };
    fetchGenres();
  }, []);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>FilmSTAR</h1>
        </NavLink>
        <Bars />
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
        <NavBtn>
          <NavBtnLink to="/logout">Logout</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/login">Sign In / Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
