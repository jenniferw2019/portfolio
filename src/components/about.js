import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import imgjw from '../assets/images/jennifer.jpeg'
import imgowl from '../assets/images/oOu.gif'


export default function AppAbout() {
    return (
        <section id="about" className="block about-block">
            <Container fluid>
                {/*
                <div className="title-holder">
                    <h2>About Me</h2>
                </div>
                */}
                <Row>
                    <Col sm={3}>
                        <Image src={imgjw}
                            style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%", // Makes the image circular
                            objectFit: "cover",  // Ensures the image fits properly within the circle
                            marginLeft: '0px',
                            marginTop: '20px'
                          }}
                        />
                    </Col>
                    <Col sm={9}>
                        <Row>
                          <Col sm={6}>
                            <div style={{ fontSize: '30px', marginTop: '5px',}}>Hi, there!</div>

                          </Col>
                          <Col sm={6}>
                            <Image src={imgowl} style={{height: '80px', marginBottom: '10px'}}
                            />
                          </Col>
                        </Row>
                        <Row>
                            <p></p>
                          <p style={{fontSize: '20px'}}>I’m a senior at Purdue University pursuing a B.S. in Computer Science 
                            with a strong passion for software engineering and machine learning. I enjoy turning innovative ideas 
                            into functional, efficient solutions that address real-world challenges. Outside of coding, 
                            I love reading, traveling, and spending time with friends. Let’s connect to share ideas, collaborate, 
                            or just chat about the latest trends in tech!</p>
                        </Row>
                    
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}