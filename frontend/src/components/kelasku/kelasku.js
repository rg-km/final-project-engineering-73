import React from 'react';
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './kelasku.css';
import NavbarPengajar from '../navbar/NavbarPengajar';
function Kelasku(){
    return(
        <>
        <NavbarPengajar/>
        <div className="row justify-content-center align-items-center">
            <div responsive="sm" className='navbar-light tabelep'>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Siswa</th>
                    <th>Satus</th>
                    <th>tanggal Daftar</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Nama</td>
                    <td>Status</td>
                    <td>tanggal Daftar</td>
                    <td><Link to="/hlm-belajar-pengajar"  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link> </td> {/* mengarah ke hlm-belajar-siswa */}
                </tr>
                <tr>
                    <td>Nama</td>
                    <td>Status</td>
                    <td>tanggal Daftar</td>
                    <td><Link to="/hlm-belajar-pengajar"  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link> </td> {/* mengarah ke hlm-belajar-siswa */}
                </tr>
                </tbody>
            </Table>
            </div>
        </div>
        </>
    )
}
export default Kelasku;