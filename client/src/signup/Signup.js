import React from 'react'
import './signupstyle.css'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Signup = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        username: "", email: "", password: ""
    });
    console.log(user);
    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { username, email, password } = user;
        console.log("Inside Register Frontend")
        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, email, password
            })
        });
        const result = await res.json();
        console.log(result);
        if (res.status === 503 || !result) {
            alert("User Already Exists Click Login");
        } else if (res.status === 500) {
            alert("Interval Server 500");
        } else {
            alert("Registered Successfully");
            history.push("/login");
        }
    }

    useEffect(() => {
        setUser({ ...user, email: ""});
        console.log(user);
    }, [])

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
                                <h1 className="heading">Sign Up</h1>
                            </div>
                            <form onSubmit={PostData}>
                                <div className="signupname">
                                    <div className="signupname_box">
                                        <input className="signupbox" placeholder="  Name" name="username" value={user.username} type="text" onChange={handleInputs}></input>
                                    </div>
                                </div>
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
                                        <button className="loginbutton" type="submit" ><Link to='/login' style={{ color: "white" }}>LOGIN</Link></button>
                                    </div>
                                    <div className="button">
                                        <input type="submit" className="signupbutton" value="Register" />
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

export default Signup;
