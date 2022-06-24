import React from 'react';
import {Table, Form, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './pengajuan.css';
import NavbarPengajar from '../navbar/NavbarPengajar';
function Pengajuan(){
    return(
        <>
        <NavbarPengajar/>
        <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            <Form.Group as={Row} className="mb-3" >
            <h4  className='lab'>Nama Siswa</h4>
                <Row>
                    <Col>
                    <Form.Label column sm="10" className='lab'>
                        Asal Sekolah <br/> Email Siswa <br/> No Telepon siswa
                    </Form.Label>
                    </Col>
                    <Col >
                    <Form.Label column sm="10">
                    <Link to=""  className="btn btn-info btn-sm px-3 me-sm-3 text-white f">Ditolak</Link></Form.Label>
                    <Form.Label column sm="10">
                    <Link to=""  className="btn btn-info btn-sm px-3 me-sm-3 text-white f">Terima</Link>
                    </Form.Label>
                    </Col>
                </Row>
                <Col sm="2">
                </Col>
                <Col sm="2">
                </Col>
            </Form.Group>
            </div>
        </div>
        </>
        
    )
}
export default Pengajuan;