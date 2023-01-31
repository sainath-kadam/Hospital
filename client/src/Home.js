import './style.css'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        username: "", email: "", doctor: "", date: "", mobile: ""
    });

    const handleInputs = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setUser({...user, [name]:val});
    }

    const handleForm = async (e) => {
        e.preventDefault();

        const { username, email, doctor, date, mobile } = user;

        const res = await fetch('/appointment', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, email, doctor, date, mobile
            })
        })

        const result = await res.json();
        console.log(result);

        if(res.status === 200) {
            console.log(result.msg);
            setUser({ ...user, email: "", doctor: "", username: "", date: "", mobile:""});
        } else {
            console.log("Some Error");
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            history.push('/');
        } else {
            document.getElementById('book').innerHTML = "";
        }
    },[])

    return (
        <>
        <Navbar />
            <section class="home">

                <div class="image">
                    <img src="./home-img.svg" alt="" />
                </div>

                <div class="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <a href="#" class="btn"> contact us <span class="fas fa-chevron-right"></span> </a>
                </div>

            </section>


            <section class="icons-container">

                <div class="icons">
                    <i class="fas fa-user-md"></i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>

                <div class="icons">
                    <i class="fas fa-users"></i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>

                <div class="icons">
                    <i class="fas fa-procedures"></i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>

                <div class="icons">
                    <i class="fas fa-hospital"></i>
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>

            </section>


            <section class="services" id="services">

                <h1 class="heading"> our <span>services</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-notes-medical"></i>
                        <h3>Free Checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                    <div class="box">
                        <i class="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, omnis.</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                </div>

            </section>


            <section class="about" id="about">

                <h1 class="heading"> <span>about</span> us </h1>

                <div class="row">

                    <div class="image">
                        <img src="about-img.svg" alt="" />
                    </div>

                    <div class="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates voluptatibus a nihil temporibus deserunt vel?</p>
                        <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                    </div>

                </div>

            </section>


            <section class="doctors" id="doctors">

                <h1 class="heading"> our <span>doctors</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src="./doc-1.jpg" alt="" />
                        <h3>Ranjana Ajarwal</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="doc-2.jpg" alt="" />
                        <h3>Sanjeev Maheshwari</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="doc-3.jpg" alt="" />
                        <h3>Ravi Kumar</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="doc-4.jpg" alt="" />
                        <h3>Raghav Aacharya</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="doc-5.jpg" alt="" />
                        <h3>Suraj Sharma</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="doc-6.jpg" alt="" />
                        <h3>Sahil Malawat</h3>
                        <span>expert doctor</span>
                        <div class="share">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>

                </div>

            </section>

            <section class="book" id="book">

                <h1 class="heading"> <span>book</span> now </h1>

                <div class="row">

                    <div class="image">
                        <img src="book-img.svg" alt="" />
                    </div>

                    <form onSubmit={(e) => handleForm(e)}>
                        <h3>book appointment</h3>
                        <input type="text" placeholder="Your Name" class="box" name="username" value={user.username} onChange={handleInputs}/>
                        <input type="number" placeholder="Your Number" class="box" name="mobile" value={user.mobile} onChange={handleInputs}/>
                        <input type="email" placeholder="Your Email" class="box" name="email" value={user.email} onChange={handleInputs}/>
                        
                        <input type="text" placeholder="Doctor Name" class="box" name="doctor" value={user.doctor} onChange={handleInputs}/>
                        <input type="date" class="box" name='date' value={user.date} onChange={handleInputs}/>
                        <input type="submit" value="book now" class="btn" />
                    </form>

                </div>

            </section>


            <section class="review" id="review">

                <h1 class="heading"> client's <span>review</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src="pic-1.png" alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                    <div class="box">
                        <img src="pic-2.png" alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                    <div class="box">
                        <img src="pic-3.png" alt="" />
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                    </div>

                </div>

            </section>


            <section class="blogs" id="blogs">

                <h1 class="heading"> our <span>blogs</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src="./blog-1.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src="./blog-2.jpg" alt="" />
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src='./blog-3.jpg'/>
                        </div>
                        <div class="content">
                            <div class="icon">
                                <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                                <a href="#"> <i class="fas fa-user"></i> by admin </a>
                            </div>
                            <h3>blog title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                            <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </>
   )
};

export default Home;