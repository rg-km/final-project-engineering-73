import React, { useEffect, useState } from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './pengajuan.css';
import NavbarPengajar from '../navbar/NavbarPengajar';
function Pengajuan(){
    // const param = useParams(); //id
    const  param = 1;
    const [nama_lengkap, setnama_lengkap] = useState([])
    const [alamat, setalamat] = useState([])
    const [email, setemail] = useState([])
    const [no_tlp, setno_tlp] = useState([])
    const fetchData = () => {
        fetch(`http://localhost:8000/transaksi.siswa.`+ param)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setnama_lengkap(data[0].nama_lengkap)
            setalamat(data[0].alamat)
            setemail(data[0].email)
            setno_tlp(data[0].no_tlp)
          })
      }
      useEffect(() => {
        fetchData()
      }, [])
    return(
        <>
        <NavbarPengajar/>
        <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            <Form.Group as={Row} className="mb-3" >
            <h4  className='lab'>{nama_lengkap}</h4>
                <Row>
                    <Col>
                    <Form.Label column sm="10" className='lab'>
                    {alamat} <br/> {email} <br/> {no_tlp}
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