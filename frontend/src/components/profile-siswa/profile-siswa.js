import React, { Component } from "react";
import NavbarSiswa from "../../components/navbar/NavbarSiswa";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import DefaultUserPic from "./team-male.jpeg";
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class ProfileSiswa extends Component {
  
  constructor(props) {
      super(props)

      this.state = {
          id_siswa:this.props.id_siswa,
          username:this.props.username,
          password:this.props.password,
          nama_lengkap:this.props.nama_lengkap,
          usia:this.props.usia,
          gender:this.props.gender,
          alamat:this.props.alamat,
          email:this.props.email,
          telepon:this.props.no_tlp
      }
  }

  fetchUserDetails=(id_siswa)=>{
      axios.get(" "+id_siswa)
        .then(res=>{
            console.log(res)
            this.setState({username:res.data.results[0].username});
            this.setState({password:res.data.results[0].password});
            this.setState({nama_lengkap:res.data.results[0].nama_lengkap});
            this.setState({usia:res.data.results[0].usia});
            this.setState({gender:res.data.results[0].gender});
            this.setState({alamat:res.data.results[0].alamat});
            this.setState({email:res.data.results[0].email});
            this.setState({telepon:res.data.results[0].telepon});
        })
        .catch(err=>console.log(err))
  }

  changeProfileImage=(event)=>{
      this.setState({uploadedFile:event.target.file[0]})
  }


  render() {

    if(this.state.profileImage){
        var imagestr=this.state.profileImage;
        imagestr = imagestr.replace("/","")
        var profilePic=""+imagestr
    }else{
        profilePic=DefaultUserPic;
    }

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
             <Form.Control plaintext readOnly defaultValue={this.state.nama_lengkap} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formUsername">
             <Form.Label column sm="2">Username</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.username} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPassword">
             <Form.Label column sm="2">Password</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.password} />
             </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formUsia">
             <Form.Label column sm="2">Usia</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.usia} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formGender">
             <Form.Label column sm="2">Gender</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.gender} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAlamat">
             <Form.Label column sm="2">Alamat</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.alamat} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
             <Form.Label column sm="2">Email</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.email} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTelepon">
             <Form.Label column sm="2">Telepon</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.telepon} />
             </Col>
            </Form.Group>

            <Link to="/profile-siswaedit">
            <Button variant="primary">Edit Profile</Button>
            </Link>

            </Form>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}