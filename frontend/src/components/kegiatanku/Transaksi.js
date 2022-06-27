import React, { Component } from 'react';
import { Link } from "react-router-dom";
 
class Transaksi extends Component {
 
    render() {
        const prmData = this.props.data;
        return (
            <tr >
                <td>{prmData.username}</td>
                <td>{prmData.status}</td>
                <td>{prmData.tgl}</td>
                <td>
                <Link to={`/hlm-belajar-siswa/${prmData.username}`}  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link>  
                {/* mengarah ke hlm-belajar-siswa */}
                </td>
            </tr>
        );
    }
}
 
export default Transaksi;