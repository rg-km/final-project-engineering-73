import React, { Component } from 'react'
import NavbarPengajar from "../../components/navbar/NavbarPengajar";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import profilePic from "./team-male.jpeg";

function ProfilePengajarEdit() {
    return (
        <>
        <NavbarPengajar/>
        
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

            <Form.Group as={Row} className="mb-3" controlId="formLulusan">
             <Form.Label column sm="2">Lulusan</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Lulusan" />
             </Col>
            </Form.Group>

            {['radio'].map((type) => (
             <div key={`inline-${type}`} className="mb-3">
                
                <Form.Group>
                <Form.Label column sm="3"  >Pengajar</Form.Label>    
                <Form.Check
                inline
                label="Biologi"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                />

                <Form.Check
                inline
                label="Matematika"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
                <Form.Check
                inline
                label="Fisika"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
                <Form.Check
                inline
                label="Lainnya"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
                </Form.Group>
            </div>
            ))}
            
            {['radio'].map((type) => (
             <div key={`inline-${type}`} className="mb-3">
                
                <Form.Group>
                <Form.Label column sm="3">Jenjang</Form.Label>    
                <Form.Check
                inline
                label="SD"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                />

                <Form.Check
                inline
                label="SMP"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
                <Form.Check
                inline
                label="SMA"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
                </Form.Group>
            </div>
            ))}

            <Form.Group as={Row} className="mb-3" controlId="formKelas">
             <Form.Label column sm="2">Kelas</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Kelas" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTelepon">
             <Form.Label column sm="2">Telepon</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Telepon" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formRekening">
             <Form.Label column sm="2">No Rekening</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Rekening" />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDeskripsi">
             <Form.Label column sm="2">Deskripsi</Form.Label>
             <Col sm="10">
             <Form.Control type="textarea" placeholder="Deskripsi" />
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

export default ProfilePengajarEdit;