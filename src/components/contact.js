import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';

import Image from 'react-bootstrap/Image';

import imgbird from '../assets/images/bird.gif'

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        
        <div className="title-holder-contact">
          <h2>Contact me</h2>
          
        </div>       
        <Row>
          <Col sm={8}>
            <p style={{fontSize: '20px', marginTop: '30px', marginLeft: '30px',}}>I am actively searching for new graduate software developer job 
              opportunities and would love to hear from you! Whether it's about a potential role, a project, or a 
              collaboration, feel free to reach out.</p>
          </Col>
          <Col sm={4}>
            < Image src={imgbird} style={{marginLeft: '150px'}}/>           
          </Col>
        </Row>
        
          <div className="contact-info">
            <ul>
              <li>
                <i className="fa fa-envelope" style={{ fontSize: '20px' }}></i>
                <a href="mailto: jenniferwpdx2018@gmail.com"> jenniferwpdx2018@gmail.com</a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin" style={{ fontSize: '20px' }}></i>
                <a href="https://www.linkedin.com/in/jennifer-wang20" target="_blank" rel="noopener noreferrer"> jennifer-wang20</a>
              </li>
              <li>
                <i className="fa-brands fa-square-github" style={{ fontSize: '22px' }}></i>
                <a href="https://github.com/jenniferw2019" target="_blank" rel="noopener noreferrer"> jenniferw2019</a>
              </li>
            </ul>
          </div>
        
      </Container>
    </section>
  );
}

export default AppContact;