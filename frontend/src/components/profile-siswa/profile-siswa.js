import React, { Component } from "react";
import NavbarSiswa from "../../components/navbar/NavbarSiswa";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import profilePic from "./team-male.jpeg";

function ProfileSiswa() {

  return (
    <>
      <NavbarSiswa />

      <Container>
        <Row>
          <Col >
            <br/>
            <img src={profilePic} alt="profils pic" />
          </Col>

          <Col>
          <br/>
            <h1>User Profile</h1>
            <Form className="mt-3">
    
            <Form.Group as={Row} className="mb-3" controlId="formNama">
             <Form.Label column sm="2">Nama</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formUsia">
             <Form.Label column sm="2">Usia</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formSekolah">
             <Form.Label column sm="2">Sekolah</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formKelas">
             <Form.Label column sm="2">Kelas</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHobby">
             <Form.Label column sm="2">Hobby</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAlamat">
             <Form.Label column sm="2">Alamat</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
             <Form.Label column sm="2">Email</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTelepon">
             <Form.Label column sm="2">Telepon</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Button variant="primary">Edit Profile</Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
    
}

export default ProfileSiswa;
