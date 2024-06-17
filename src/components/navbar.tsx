import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Projetos</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contato</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
