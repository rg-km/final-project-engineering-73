import React, { Component, useEffect, useState } from 'react'
import NavbarPengajar from "../../components/navbar/NavbarPengajar";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import profilePic from "./team-male.jpeg";
import {Link} from 'react-router-dom';
import axios from 'axios';


function ProfilePengajar (){
 
  const param = 1 ;
  const [nama_lengkap, setnama_lengkap] = useState([])
  const [usia, setusia] = useState([])
  const [lulusan, setlulusan] = useState([])
  const [pengajar, setpengajar] = useState([])
  const [kelas, setkelas] = useState([])
  const [telepon, settelepon] = useState([])
  const [tarif, settarif] = useState([])
  const [no_rekening, setno_rekening] = useState([])

  const fetchData = () => {
    fetch(`http://localhost:8000/data.guru.`+ param)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setnama_lengkap(data[0].nama_lengkap)
      setusia(data[0].usia)
      setlulusan(data[0].lulusan)
      setpengajar(data[0].pengajar)
      setkelas(data[0].kelas)
      settelepon(data[0].telepon)
      settarif(data[0].tarif)
      setno_rekening(data[0].no_rekening)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])


    return (
      <>
      <NavbarPengajar />
      <Container>
        <Row>
          <Col >
            <br/>
            <img src={profilePic} alt="profils pic" />

            <Form className="mt-3">
            <Form.Group as={Row} className="mb-1" controlId="formRekening">
             <Form.Label column sm="5">No Rekening</Form.Label>
             <Col sm="7">
             <Form.Control plaintext readOnly defaultValue={no_rekening} />
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
             <Form.Control plaintext readOnly defaultValue={nama_lengkap} />
             </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formUsia">
             <Form.Label column sm="2">Usia</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={usia} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formLulusan">
             <Form.Label column sm="2">Lulusan</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={lulusan} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPengajar">
             <Form.Label column sm="2">Pengajar</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={pengajar} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formKelas">
             <Form.Label column sm="2">Kelas</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={kelas} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTelepon">
             <Form.Label column sm="2">Telepon</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={telepon} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTarif">
             <Form.Label column sm="2">Tarif</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={tarif} />
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

