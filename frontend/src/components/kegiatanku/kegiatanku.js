import React from 'react';
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './kegitanku.css';
function Kegiatanku(){
    return(
        <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Pengajar</th>
                    <th>Satus</th>
                    <th>Kelas</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nama</td>
                    <td>Status</td>
                    <td>Kelas</td>
                    <td><Link to=""  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link> </td> {/* mengarah ke hlm-belajar-siswa */}
                </tr>
                </tbody>
            </Table>
            </div>
        </div>
    )
}
export default Kegiatanku;