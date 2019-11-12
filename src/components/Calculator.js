import React, { Component } from 'react';
import sumImg from '../assets/images/Group10.png';
import equalImg from '../assets/images/Group5.png';
import { Row, Col } from 'react-bootstrap';
class Calculator extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1> <strong>CUOTA</strong></h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="2">
                        <label className="col-form-label" for="inputDefault">Cuota Fija</label>
                        <h3>$600 MXN</h3>
                    </Col>

                    <Col md="1">
                    <img src={sumImg}/>
                    </Col>

                    <Col md="3">
                        <div className="form-group">
                            <label class="col-form-label" for="inputDefault"></label>
                            <input type="text" className="form-control" placeholder="Default input" id="inputDefault" />
                        </div>
                    </Col>

                    <Col md="1">
                    <img src={sumImg}/>
                    </Col>

                    <Col md="auto">
                        <label className="col-form-label" for="inputDefault">Pago Mensual</label>
                        <h3>total</h3>
                    </Col>
                </Row>
            </div>

        );
    }
}
export default Calculator