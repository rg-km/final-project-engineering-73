import React, { Component } from 'react';
import { Link } from "react-router-dom";
 
class Transaksi extends Component {
 
    render() {
        const getData = this.props.data;
        return (
            <tr >
                <td>{getData.username}</td>
                <td>{getData.status}</td>
                <td>{getData.tgl}</td>
                <td>
                <Link to={`/hlm-belajar-pengajar/${getData.username}`}  className="btn btn-info btn-sm px-2 me-sm-3 text-white">detail</Link>  
                {/* mengarah ke hlm-belajar-pengajar */}
                </td>
            </tr>
        );
    }
}
 
export default Transaksi;