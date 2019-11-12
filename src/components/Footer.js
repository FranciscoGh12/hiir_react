import React, { Component } from 'react';
import footerLogo from '../assets/images/Group3.png';
import { Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className="footer-middle" style={{background:'black', color:'white'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                            <img src={footerLogo}/>
                                <address>
                                    <ul className="list-unstyled">
                                    <li><a>Copyright 2019</a></li>
                                    </ul>
                                </address>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <ul className="list-unstyled">
                                    <li><a>Acerca de nosotros</a></li>
                                    <li><a>contacto@hiit.com</a></li>
                                    <li><a>Aviso de privacidad</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <ul className="list-unstyled">
                                    <li><a></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <ul className="list-unstyled">
                                    <li><a href="https://admin.hiit.io/">Acceso a clientes</a></li>
                                    <li><a href="https://www.facebook.com/stackcodeio">Facebook</a></li>
                                    <li><a href="https://twitter.com/stackcodeio">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Footer