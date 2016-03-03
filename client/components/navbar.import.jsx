'use strict';

import Search from 'client/components/search';

const {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} = ReactBootstrap;

const {
  LinkContainer
} = ReactRouterBootstrap;

export default () => {
  return <Navbar>
    <Navbar.Header>
      <LinkContainer to={{pathname: '/'}}>
        <Navbar.Brand>
          <a href="/#">Gitted</a>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{pathname: '/repos'}}>
          <NavItem eventKey={1} href="/repos">Repos</NavItem>
        </LinkContainer>
        <LinkContainer to={{pathname: '/users'}}>
          <NavItem eventKey={1} href="/users">Users</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
      </Nav>
      <Nav pullRight style={{margin: 0, padding: 0, marginTop: '.6em'}}>
        <Search />
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
}