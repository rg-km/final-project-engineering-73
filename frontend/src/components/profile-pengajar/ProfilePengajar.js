import React, { Component } from 'react'
import NavbarPengajar from "../../components/navbar/NavbarPengajar";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import DefaultUserPic from "./team-male.jpeg";
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class ProfilePengajar extends Component {
  

  constructor(props) {
      super(props)

      this.state = {
          id_guru:this.props.id_guru,
          username:this.props.username,
          nama_lengkap:this.props.nama_lengkap,
          gender:this.props.gender,
          pengajar:this.props.id_mapel,
          kelas:this.props.kelas,
          telepon:this.props.no_tlp,
          tarif:this.props.tarif,
          rekening:this.props.no_rek
      }
  }

  fetchUserDetails=(id_guru)=>{
      axios.get(" "+id_guru)
        .then(res=>{
            console.log(res)
            this.setState({username:res.data.results[0].username});
            this.setState({nama_lengkap:res.data.results[0].nama_lengkap});
            this.setState({gender:res.data.results[0].gender});
            this.setState({pengajar:res.data.results[0].pengajar});
            this.setState({kelas:res.data.results[0].kelas});
            this.setState({telepon:res.data.results[0].telepon});
            this.setState({tarif:res.data.results[0].tarif});
            this.setState({rekening:res.data.results[0].rekening});
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
             <Form.Control plaintext readOnly defaultValue={this.state.rekening} />
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
             <Form.Control plaintext readOnly defaultValue={this.state.nama_lengkap} />
             </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formUsia">
             <Form.Label column sm="2">Usia</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.usia} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formLulusan">
             <Form.Label column sm="2">Lulusan</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.lulusan} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPengajar">
             <Form.Label column sm="2">Pengajar</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.pengajar} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formKelas">
             <Form.Label column sm="2">Kelas</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.kelas} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTelepon">
             <Form.Label column sm="2">Telepon</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.telepon} />
             </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDeskripsi">
             <Form.Label column sm="2">Deskripsi</Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.deskripsi} />
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
}
