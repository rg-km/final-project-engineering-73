import React from 'react';
import {Table, Form, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../hlm-belajar-siswa/hlm-belajar.css';
function Pengajuan(){
    return(
        <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="10" className='lab'>
                Nama
                </Form.Label>
                <Col sm="2">
                <Link to=""  className="btn btn-info btn-sm px-2 me-sm-3 text-white">Terima</Link>
                </Col>
                <Col sm="2">
                <Link to=""  className="btn btn-info btn-sm px-2 me-sm-3 text-white">Tolak</Link>
                </Col>
            </Form.Group>
            </div>
        </div>
    )
}
export default Pengajuan;