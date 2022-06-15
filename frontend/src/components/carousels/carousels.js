import React from 'react';
import {Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './satu.png';
import slide2 from './dua.png';
import slide3 from './tiga.png';
const Carousels =() =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide1}
                alt=""
                />
                <Carousel.Caption>
                <p className='text-dark'>Temukan Les Private Online dengan Harga Terjangkau 
                dan Guru yang Ahli di Bidangnya </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <p className='text-dark'>Ayo! jadi Bagian Guruku, Pendaftaran Gratis </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <p className='text-dark'>Daftar sebagai Siswa atau Pengajar untuk Mendapatkan Uang dan Guru Terbaik </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Carousels;