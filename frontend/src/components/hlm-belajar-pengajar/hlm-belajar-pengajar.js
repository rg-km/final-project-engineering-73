import React from 'react';
import {Table, Form, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './hlm-belajar.css';
import NavbarPengajar from '../navbar/NavbarPengajar';
function HlmBelajarPengajar(){
    return(
        <>
        <NavbarPengajar/>
         <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            <Form.Group>
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
                    <Form.Select aria-label="Default select example">
                        <option>Pilih Hari</option>
                        <option value="1">Senin</option>
                        <option value="2">Selasa</option>
                        <option value="3">Rabu</option>
                        <option value="1">Kamis</option>
                        <option value="2">Jumat</option>
                        <option value="3">Sabtu</option>
                    </Form.Select>
                </Col>
               
                <Form.Label column  sm="2" className='lab '>
                Link Kelas
                </Form.Label>
                <Col sm="10" >
                <Form.Control
                    type="text"
                    id="linkkelas"
                    aria-describedby="passwordHelpBlock"
                />
                </Col>
            </Form.Group>
            <Link to=""  className=" btn btn-info btn-sm px-3 me-sm-3 text-white f">Simpan</Link>
            </Form.Group>
            </div>
        </div>
        </>
    )
}
export default HlmBelajarPengajar;