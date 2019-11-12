import React, { Component } from 'react';
import { Form, Row,Col, Button } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col md="2">
                    <h2>Contacto:</h2>
                    </Col>

                    <Col md="auto">
                    <Form className="justify-content-md-end" style={{
                width:'50%',
                margin:'5%'
            }}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Nombre." />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridApellidos">
                        <Form.Label>Apellidos:</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos." />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email." />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Deje su mensaje:</Form.Label>
                    <Form.Control as="textarea" rows="2" />
                </Form.Group>

                <Button variant="warning" type="submit">
                    Enviar
  </Button>
            </Form>
     
                    </Col>
                </Row>

            
            </div>
      );
    }
}
export default Contact