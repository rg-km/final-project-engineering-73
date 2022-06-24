import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './kegitanku.css';
import NavbarSiswa from '../navbar/NavbarSiswa';
import axios from 'axios';

export default class Kegiatanku extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`/api/guru`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
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
                        <th>Kelas</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    {
                    this.state.persons
                        .map(person =>
                        <td key={person.id}>{person.id}</td>
                        )
                    }
                        <td>Nama</td>
                        <td>Status</td>
                        <td>Kelas</td>
                        <td><Link to="/hlm-belajar-siswa"  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link> </td> {/* mengarah ke hlm-belajar-siswa */}
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>Status</td>
                        <td>Kelas</td>
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
