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
                          }}
                        />
                    </Col>
                    <Col sm={9}>
                        <Row>
                          <Col sm={3}>
                            <div>Hi, there!</div>

                          </Col>
                          <Col sm={3}>
                            <Image src={imgowl} style={{height: "50px",}}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <p>I am junior at Purdue</p>
                        </Row>
                    {/*
                        <div style={{ fontSize: '25px'}}>Here there!
                            <Image src={imgowl}
                                style={{
                                    height: "50px",
                                }}
                            />
                        </div>
                        <p>Hi! I’m a junior pursuing a degree in Computer Science with a strong passion for software engineering 
                            and machine learning. I love turning innovative ideas into functional, efficient solutions that 
                            address real-world challenges.

                            My academic journey has equipped me with a solid foundation in programming languages like Python, 
                            C++, and Java, and I've applied these skills to develop robust software systems and explore 
                            data-driven applications. Currently, I’m diving deep into the fascinating world of machine learning, 
                            working on projects that involve training models for predictive analytics and pattern recognition.</p>
                    */}
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}