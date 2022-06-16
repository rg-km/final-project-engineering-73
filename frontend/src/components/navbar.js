import React from 'react';
//import { Link } from "react-router-dom";
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Container, 
  Offcanvas,
  Form,
  Button

} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 const Headerutama = () => {
     return (
        <div>
          {['sm'].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand href="#Bantuan">GURUKU</Navbar.Brand>
                {/* <Form className="d-flex"> //tambahan untuk header siswa dan guru
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#Bantuan">Bantuan</Nav.Link>
                      <NavDropdown
                        title="Register"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#Sebagai Siswa">Sebagai Siswa</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Sebagai Pengajar</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#Login">Login</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
     )
 }

 const Headersiswa = () => {
  return (
    <div></div>
  )
}

 export {Headerutama, Headersiswa };
 