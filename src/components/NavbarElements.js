import {FaBars} from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #f5ad42;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #05a100;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  font-size: 1.5rem;
  background: #fad975;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  :hover {
    transition: all 0.2s ease-in-out;
    background: #b39a50;
    color: #010606;
  }
`;
