import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AppHeader({ darkMode, onToggleDarkMode }) {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#about">Jennifer Wang</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form>
              <Form.Check 
                type="switch"
                id="dark-mode-switch"
                label={darkMode ? '🌙' : '☀️'}
                checked={darkMode}
                onChange={onToggleDarkMode}
              />
            </Form>
            <Nav className="me-auto">
              <Nav.Link href="#about" className="fs-6">Home</Nav.Link>
              <Nav.Link href="#experiences" className="fs-6">Experiences</Nav.Link>
              <Nav.Link href="#projects" className="fs-6">Projects</Nav.Link>
              <Nav.Link href="#contact" className="fs-6">Contact</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}