import React, { Component } from 'react';
import backCard1 from '../assets/images/Compu.png';
import backCard2 from '../assets/images/Foto.png';
import backCard3 from '../assets/images/fotogestion.png';
import check from '../assets/images/check.png';
import { Card, Button, Row, Col } from 'react-bootstrap';

class WebCard extends Component {
    render() {
        return (
            <div className="Cards">
                <div className="compu">
                <Card className="bg-dark text-white">
                <Card.Img src={backCard1} alt="Card image" />
                <Card.ImgOverlay>
                    <Row style={{
                        margin:'100px',
                        display:'flex',
                        width:'50%',
                        height:'100%',
                        fontSize:'calc(2px + 2vmin)'
                    }}>
                        <Col sm="8">
                        <Card.Title style={{
                            fontSize:'calc(18px + 2vmin)'
                        }}>Controla tu centro deportivo</Card.Title>
                    <Card.Text>
                        Control total de tus clases, ingresos, alumnos y maestros en tiempo real
                        desde cualquier dispositivo.
                    </Card.Text>
                    <Button variant="warning" size="lg">Inicia Gratis</Button>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>

                </Card.ImgOverlay>
            </Card>
                </div>
                <div className="gestion">
                <Card className="bg-dark text-white">
                <Card.Img src={backCard3} alt="Card image" />
                <Card.ImgOverlay>
                <Row style={{
                        margin:'150px',
                        display:'flex',
                        width:'50%',
                        height:'100%',
                        fontSize:'calc(2px + 2vmin)',
                        color:'black'
                    }}>
                        <Col sm="8">
                        <Card.Title style={{
                            color:'#ff6319',
                            fontSize:'calc(18px + 2vmin)'
                        }}> <strong>Gestión poderosa</strong>
                            </Card.Title>
                    <Card.Text>
                        Domina las metricas que importan y toma mejores
                        desiciones con nuestras herramientas de monitoreo
                        en tiempo real.
                    </Card.Text>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
                </div>
                <di className="pesas">
                <Card className="bg-dark text-white">
                <Card.Img src={backCard2} alt="Card image" />
                <Card.ImgOverlay>
                <Row style={{
                        margin:'50px',
                        display:'flex',
                        width:'50%',
                        height:'100%',
                        fontSize:'9px',
                        color:'white'
                    }}>
                        <Col sm="8">
                    <Card.Text>
                        <Row>
                            <Col sm="1">
                            <img src={check}/>
                            </Col>
                            <Col sm="11">
                            <h5><strong>Toma desiciones </strong>con el tablero de indicadores</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="1">
                            <img src={check}/>
                            </Col>
                            <Col sm="11">
                            <h5><strong>Gestiona </strong>tus socios y entrenadores</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="1">
                            <img src={check}/>
                            </Col>
                            <Col sm="11">
                            <h5><strong>Registra </strong>tus ventas</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="1">
                            <img src={check}/>
                            </Col>
                            <Col sm="11">
                            <h5><strong>Mide </strong>la productividad de tu personal</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="1">
                            <img src={check}/>
                            </Col>
                            <Col sm="11">
                            <h5><strong>Administra </strong>tus rutinas y clases</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="1">
                            <img src={check}/>
                            </Col>
                            <Col sm="11">
                            <h5><strong>Controla </strong>tus ingresos y egresos</h5>
                            </Col>
                        </Row>
                    </Card.Text>
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                </Card.ImgOverlay>
            </Card>
                </di>
            </div>

        );
    }
}

export default WebCard