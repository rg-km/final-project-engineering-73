import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './kegitanku.css';
import NavbarSiswa from '../navbar/NavbarSiswa';
import Transaksi from './Transaksi';

const apiDummy = "http://localhost:8000/transaksi.siswa/" //Dummy API
//npx json-server --watch data/db.json --port 8000 (untuk menjalankan)
export default class Kegiatanku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [],       // Untuk tampung Get all data     
        }
    }
    componentDidMount() {
        this.GetdataUsers()
    }
    GetdataUsers() {
        fetch(apiDummy).then(res => {
            if (res.status === 200)
                return res.json()
            else
                return <p>No data Found</p>
        }).then(resdata => {
            console.log(resdata)
            this.setState({
                dataUser: resdata
            })
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
                        <th>tanggal Daftar</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.dataUser.map(dataUser => {
                            return <Transaksi key={dataUser.id_siswa}
                                data={dataUser} />
                        })
                    }
                    </tbody>
                </Table>
                </div>
            </div>
            </>
        )
    }
}
