import React from 'react';
import {Card, NavDropdown, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import mbkm from './mbkm.png';
import guruku from './guruku.png';
import ruangguru from './ruangguru.png';
const Footer =() =>{
    return(
        <Card.Body className='FooterU'>
            <br></br>
            {/* Organization */}
            <Row className="justify-content-md-center">
                <Col xs lg="1" className='center'><img src={guruku} alt="" width="100" height="50"/></Col>
                <Col xs lg="1"><img src={ruangguru} alt="" width="100" height="50"/></Col>
                <Col xs lg="1"><img src={mbkm} alt="" width="100" height="50"/></Col>
            </Row>
            <NavDropdown.Divider />
            {/* Copyright */}
            <Card.Text className='text-center'>
            Copyright &copy; Guruku - Ruangguru
            <div className='d-flex justify-content-center'>
                <tr >
                    <th className='p-2'><BsTwitter/></th>
                    <th className='p-2'><BsInstagram/></th>
                    <th className='p-2'><BsFacebook/></th>
                </tr>
            </div>
            </Card.Text>
        </Card.Body>
    )
}
export default Footer; 