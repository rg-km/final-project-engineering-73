import React, { Component } from 'react'
import  '../login/login.css';
import contactt from './contactt.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillTelephoneFill, BsFillChatLeftTextFill, BsGoogle } from "react-icons/bs";
import {Card,  Col, Row} from 'react-bootstrap';
function Contact () {
  return (
  <div className="row justify-content-center align-items">
    <div className="col-sm-4">
    <img src={contactt} alt="" height={500} />
    </div>
    <div className="col-sm-4">
    <form>
        <h3 className='mb-4'>Call Us!</h3>
        <p >Kami siapa melayani anda kapan saja,<br/>
            kirim keluhan anda.<br/>
            (senin- jumat) | 08.00-17.00
        </p>
        <Row className="justify-content-md-center">
            <Col xs lg="4" className='center'><BsFillTelephoneFill/> (021)999990</Col>
            <Col xs lg="4"><BsFillChatLeftTextFill/> 081999900000</Col>
            <Col xs lg="4"><BsGoogle/> <Card.Link href="mailto:guruku@co.id">guruku@co.id</Card.Link></Col>
        </Row>
      </form>
    </div>
  </div>
  );
}

export default Contact;