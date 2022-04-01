import React from 'react'
import resume from './RishabhResume.pdf'
export default function Section(props) {
    return (
        <>
            <section>

                <section className="home" id="home">
                    <h3>HI THERE !</h3>
                    <h1>I'm <span>Rishabh Goswami</span></h1>
                    <p>I'm b.Tech 3rd year student. A web developer and providng content on web development.</p>
                    <a href="#about"><button>About me</button></a>
                </section>




                <section className="about" id="about">
                    <h1 className="heading"><span>About</span> Me</h1>
                    <div className="row">
                        <div className="info">
                            <h3>Name: <span>Rishabh Goswami</span></h3>
                            <h3>Age: <span>20</span></h3>
                            <h3>Post: <span>Web developer</span></h3>
                            <h3>Nationality: <span>Indian</span></h3>
                            <a href={resume} download>
                                <button className="btn">Download CV</button>
                            </a>
                        </div>

                        <div className="counter">
                            <div className="box">
                                <span>1+</span>
                                <h3>Year of experience</h3>
                            </div>
                            <div className="box">
                                <span>10+</span>
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>
                </section>

              



            </section>






            
            <section href="/education" className="education" id="education">
                <h1 className="heading">My <span>Education</span></h1>
                <div className="box-container">

                    <div className="box">
                        <span>2017</span>
                        <h3>HighSchool Passout</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere commodi neque, quisquam numquam
                            ducimus aliquid sunt inventore itaque iste?</p>
                    </div>

                    <div className="box">
                        <span>2019</span>
                        <h3>Intermediate Passout</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere commodi neque, quisquam numquam
                            ducimus aliquid sunt inventore itaque iste?</p>
                    </div>

                    <div className="box">
                        <span>2023</span>
                        <h3>B.tech</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facere commodi neque, quisquam numquam
                            ducimus aliquid sunt inventore itaque iste?</p>
                    </div>



                </div>
            </section>
            




            
            <section className="contact" id="contact">
                <div className="heading"><span>Contact</span> Us</div>

                <div className="row">
                    <div className="content">
                        <h3 className="title"> CONTACT INFO</h3>

                        <div className="info">
                            <h3>email
                                rishabhgoswami901@gmail.com</h3>
                            <h3>call
                                +91 9012925961</h3>
                            <h3>place
                                U.P, India - 282010</h3>
                        </div>
                    </div>
                    <form action="https://formsubmit.co/rishabhgoswami901@email.com" method="post">
                        <input type="text" name="" id="" placeholder="Name"/>
                            <input type="email" name="" id="" placeholder="Email"/>
                                <input type="text" name="" id="" placeholder="Project"/>
                                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                                    <button /*style="font-size:24px"*/>Send <i className="fa fa-send"></i></button>
                                </form>
                            </div>

                        </section>
                    </>
                    )
}
