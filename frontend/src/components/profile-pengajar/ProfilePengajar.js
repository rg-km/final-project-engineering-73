import React, { Component } from "react";
import NavbarPengajar from "../../components/navbar/NavbarPengajar";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import profilePic from "./team-male.jpeg";
import {Link} from 'react-router-dom';

function ProfilePengajar() {

  return (
    <>
      <NavbarPengajar />

      <Container>
        <Row>
          <Col >
            <br/>
            <img src={profilePic} alt="profils pic" />

            <Form className="mt-3">
            <Form.Group as={Row} className="mb-1" controlId="formNama">
             <Form.Label column sm="5">No Rekening</Form.Label>
             <Col sm="7">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>
            </Form>
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

            <Form.Group as={Row} className="mb-3" controlId="formLulusan">
             <Form.Label column sm="2">Lulusan</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPengajar">
             <Form.Label column sm="2">Pengajar</Form.Label>
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

            <Form.Group as={Row} className="mb-3" controlId="formTelepon">
             <Form.Label column sm="2">Telepon</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDeskripsi">
             <Form.Label column sm="2">Deskripsi</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue="" />
             </Col>
            </Form.Group>

            <Link to="/profile-pengajaredit">
            <Button variant="primary">Edit Profile</Button>
            </Link>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
    
}

export default ProfilePengajar;
