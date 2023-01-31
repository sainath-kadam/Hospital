import React from 'react'
import './loginstyle.css'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Footer';
import Navbar from '../Navbar';


const Login = () => {
    const history = useHistory();

    const [ user, setUser ] = useState({
        email:"", 
        password:""
    });

    console.log(user);
    const handleInputs = (e) => {
        const name = e.target.name;
        const val = e.target.value;

        setUser({...user, [name]:val})
    }

    const checkLogin = async (e) => {
        e.preventDefault();
        const {email, password} = user;

        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        });
        const result = await res.json();
        console.log(result);
        if (result.user) {
            localStorage.setItem('token', result.user);
            localStorage.setItem('email', user.email);
            history.push("/");
        } else {
            alert("Either Password or Email is Incorrect");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            console.log("User already login")
            history.push('/');
        }
    },[])

    return (
        <div>
            <Navbar />
            <div className="main">
                <div className="signup">
                    <div className="signupimage">
                        {/* <img src='./public/images/succeed.jpg' /> */}
                    </div>
                    <div className="signupform">
                        <div>
                            <div className="signuphead">
                                <h1 className="heading">Login</h1>
                            </div>
                            <form onSubmit={checkLogin}>
                                <div className="signupemail">
                                    <div className="signupemail_box">
                                        <input className="signupbox" placeholder="  Email" type="email" name="email" value={user.email} onChange={handleInputs} required></input>
                                    </div>
                                </div>
                                <div className="signuppassword">
                                    <div className="signuppassword_box">
                                        <input className="signupbox" placeholder="  Password" name="password" value={user.password} type="text" onChange={handleInputs} required></input>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <div className="button">
                                        <button className="signupbutton" type="submit" ><Link to='/register' style={{ color: "blue" }}>SIGN UP</Link></button>
                                    </div>
                                    <div className="button">
                                        <input type="submit" className="loginbutton" value="Login" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;

