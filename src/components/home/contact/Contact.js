import React from 'react';
import { Row } from 'react-bootstrap';
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = e =>{
        e.preventDefault()
        emailjs.sendForm('service_0njuf99','template_ur9p9ps',e.target,"user_z70rTODekCC0VrP6by2Ys")
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    return (
        <div id="contact" className="container">
            <h2 className="text-center my-5 text-danger">Contact <span className="text-success">Me</span></h2>
            <Row className="g-3">
            <div className="col-md-7">
                <form onSubmit={sendEmail}>
                    <div data-aos="fade-up" data-aos-duration="800" class="mb-3">
                        <input type="text" name="name" class="form-control" placeholder="Full Name"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="900" class="mb-3">
                        <input type="text" name="user_email" class="form-control" placeholder="Email Address"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" class="mb-3">
                        <input type="text" class="form-control" placeholder="Subject"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1100" class="mb-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div class="mb-3">
                        <input type="submit" value="Send" className="btn btn-success"/>
                    </div>
                </form>
                </div>
                <div className="col-md-5">
                    <div data-aos-duration="900" data-aos="fade-up">
                        <h5><i class="fas fa-mobile"></i> Phone </h5>
                        <p> +8801648308424</p>
                        <h5><i class="fas fa-envelope-open-text"></i> Email </h5>
                        <p>Dev.Aburrahman01@gmail.com</p>
                        <h5> <i class="fas fa-map-marker-alt"></i> Location</h5>
                        <p>Chandpur, Bangladesh</p>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Contact;