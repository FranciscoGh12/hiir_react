import React, { Component } from 'react';
import backCard1 from '../assets/images/Compu.png';
import backCard2 from '../assets/images/Foto.png';
import backCard3 from '../assets/images/fotogestion.png';
import { Card } from 'react-bootstrap';

class WebCard extends Component {
    render() {
        return (
            <div className="Cards">
                <div className="compu">
                <Card className="bg-dark text-white">
                <Card.Img src={backCard1} alt="Card image" />
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
                <div className="gestion">
                <Card className="bg-dark text-white">
                <Card.Img src={backCard3} alt="Card image" />
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
                <di className="pesas">
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
                </di>
            </div>

        );
    }
}

export default WebCard