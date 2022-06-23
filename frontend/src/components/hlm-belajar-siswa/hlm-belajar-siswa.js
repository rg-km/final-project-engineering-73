import React from 'react';
import {Table, Form, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './hlm-belajar.css';
function HlmBelajarSiswa(){
    return(
        <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2" className='lab'>
                Nama
                </Form.Label>
                <Col sm="10">
                <Form.Control
                    type="text"
                    placeholder="Disabled input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2" className='lab'>
                Mata Pelajaran
                </Form.Label>
                <Col sm="10">
                <Form.Control
                    type="text"
                    placeholder="Disabled input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2" className='lab'>
                Jadwal Kelas
                </Form.Label>
                <Col sm="10">
                <Form.Control
                    type="text"
                    placeholder="Disabled input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2" className='lab'>
                Link Kelas
                </Form.Label>
                <Col sm="10">
                <Form.Control
                    type="text"
                    placeholder="Disabled input"
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                />
                </Col>
            </Form.Group>
            </div>
        </div>
    )
}
export default HlmBelajarSiswa;