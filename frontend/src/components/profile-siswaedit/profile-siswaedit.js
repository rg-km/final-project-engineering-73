import React, { Component } from 'react'
import NavbarSiswa from "../../components/navbar/NavbarSiswa";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import profilePic from "./team-male.jpeg";

function ProfileSiswaEdit() {
    return (
        <>
        <NavbarSiswa/>
        
        <Container>
        <Row>
          <Col >
            <br/>
            <img src={profilePic} alt="profils pic" />

            <Form className="mt-3">
            <Form.Group controlId="formFile" className="mb-3">
             <Form.Label>Profile Photo</Form.Label>
             <Form.Control type="file" />
            </Form.Group>
            </Form>
          </Col>

          <Col>
          <br/>
            <h1>Edit User Profile</h1>
            <Form className="mt-3 w-100">
    
            <Form.Group as={Row} className="mb-3" controlId="formNama">
             <Form.Label column sm="2">Nama</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Nama" />
             </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formUsia">
             <Form.Label column sm="2">Usia</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Usia" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formSekolah">
             <Form.Label column sm="2">Sekolah</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Sekolah" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formKelas">
             <Form.Label column sm="2">Kelas</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Kelas" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHobby">
             <Form.Label column sm="2">Hobby</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Hobby" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAlamat">
             <Form.Label column sm="2">Alamat</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Alamat" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
             <Form.Label column sm="2">Email</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Email" />
             </Col>
            </Form.Group>

            <Button variant="primary">Simpan</Button>

            </Form>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default ProfileSiswaEdit;