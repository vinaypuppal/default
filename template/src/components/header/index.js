import { h } from 'preact';
import { NavLink as Link } from 'react-router-dom';
import styled from 'react-emotion';

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: #ff6600;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const Nav = styled.nav`
  float: right;
  font-size: 100%;
  color: red;
`;

const Title = styled.h1`
  float: left;
  margin: 0;
  padding: 0 15px;
  font-size: 24px;
  line-height: 56px;
  font-weight: 400;
  color: #fff;
`;

const NavLink = styled(Link)`
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  min-width: 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0);
  text-decoration: none;
  color: #fff;
  will-change: background-color;
  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
  &.active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const HeaderBar = () => (
  <Header>
    <Title>Preact App</Title>
    <Nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/profile">
        Me
      </NavLink>
      <NavLink to="/profile/john">John</NavLink>
    </Nav>
  </Header>
);

export default HeaderBar;
