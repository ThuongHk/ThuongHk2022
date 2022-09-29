import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer">
           <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 mt-3 left">
                <h5>Our Address</h5>
                <p>121, clear Water Bay Road</p>
                <p>Clear Water Bay, Kowloon</p>
                <p>HONGKONG</p>
                <p><i className="fas fa-phone-alt"></i>: +852 1234 56778</p>
                <p><i className="fas fa-phone-office"></i>: +852 98765 4321</p>
                <p><i className="fas fa-envelope"></i>: hkthuong@gmail.com</p>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 right">
                <div className="row">
                <i className="fab fa-google-plus-g"></i><i className="fab fa-facebook-square"></i>
                <i className="fab fa-invision"></i><i className="fab fa-youtube"></i><i className="fas fa-envelope-square"></i>
                </div>
            </div>
           </div>

           <div className="row footer-bt">
            <span className='text-center'>@Coppyright 2018 hongkong12</span>
           </div>
        </div>
    );
};

export default Footer;