import React, { Component } from 'react';
import backCard1 from '../assets/images/Compu.png';
import backCard2 from '../assets/images/Foto.png';
import { Card } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';

class WebCard extends Component {
    render() {
        return (
            <div className="Cards">
                                <di className="pesas">
                    <Jumbotron style={{ backgroundImage: `url(${backCard1})`, backgroundSize:'cover', height:'100%', alignContent:'center' }}>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
  </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                </di>
                <div className="compu">
                    <Card className="bg-dark text-white">
                        <Card.Img src={backCard2} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                    </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>

            </div>

        );
    }
}

export default WebCard