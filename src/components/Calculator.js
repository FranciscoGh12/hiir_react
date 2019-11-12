import React, { Component } from 'react';
import sumImg from '../assets/images/Group10.png';
import equalImg from '../assets/images/Group5.png';
import { Row, Col } from 'react-bootstrap';

function calculoCuota(cuota){
    var cuotaFija = 695;
    var suma = <h3>${cuotaFija+cuota}</h3>;
    return suma;
}
class Calculator extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1> <strong>CUOTA</strong></h1>
                    </Col>
                </Row>

                <div style={{
                    display:'flex',
                    background:'black', 
                    color:'white',
                    height:'100%', 
                    alignItems:'center',
                    justifyContent:'center'}}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <label className="col-form-label" for="inputDefault">Cuota Fija</label>
                        <h3>$600 MXN</h3>
                    </Col>

                    <Col md="auto">
                    <img src={sumImg}/>
                    </Col>

                    <Col md="auto">
                        <div style={{
                            alignItem:'center',
                            justifyContent:'center',   
                        }} className="form-group">
                            <label class="col-form-label" for="inputDefault"></label>
                            <input type="text" className="form-control" placeholder="0" id="inputDefault" />
                            <button style={{
                                marginTop:'10px',
                                alignContent:'center',
                            justifyItems:'center',
                            position:'relative'  
                            }} type="button" class="btn btn-warning">Iniciar</button>
                        </div>
                    </Col>

                    <Col md="auto">
                    <img src={equalImg}/>
                    </Col>

                    <Col md="auto">
                        <label className="col-form-label" for="inputDefault">Pago Mensual</label>

                    </Col>
                </Row>
                </div>

            </div>

        );
    }
}
export default Calculator