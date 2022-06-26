import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './kegitanku.css';
import NavbarSiswa from '../navbar/NavbarSiswa';
import axios from 'axios';

export default class Kegiatanku extends React.Component {
    
    render(){
        return(
            <>
            <NavbarSiswa/>
            <div className="row justify-content-center align-items-center">
                <div responsive="sm" className='navbar-light tabelep'>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Pengajar</th>
                        <th>Satus</th>
                        <th>tanggal Daftar</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td>Nama</td>
                        <td>Status</td>
                        <td>tanggal Daftar</td>
                        <td><Link to="/hlm-belajar-siswa"  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link> </td> {/* mengarah ke hlm-belajar-siswa */}
                    </tr>
                    </tbody>
                </Table>
                </div>
            </div>
            </>
        )
    }
}
