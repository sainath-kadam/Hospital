import './style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect( () => {
        const token = localStorage.getItem('token');
        if(token) {
            setShow(true);
        } else {
            setShow(false);
        }
    })
    return (
        <>
            <header class="header">

                <a href="/" class="logo"> <i class="fas fa-heartbeat"></i> JJ hospital</a>

                <nav class="navbar">
                    <a href="#home">home</a>
                    <a id="map" href="https://www.google.com/maps/search/jj+hospital+mumbai/@18.9627326,72.8315171,17z/data=!3m1!4b1">Maps</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                    {show ? <Link to='/logout'>Logout</Link> :
                    <span>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </span>
                    }
                </nav>

                <div id="menu-btn" class="fas fa-bars"></div>

            </header>
        </>
    )
};

export default Navbar;