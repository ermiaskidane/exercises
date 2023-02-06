import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Link to='/' className='social-logo header-social-logo'>
          Diamond
          <i class='fa-solid fa-diamond'></i>
        </Link>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Brand href='/about'>About</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default Header
