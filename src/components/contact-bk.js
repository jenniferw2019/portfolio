import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        {/*
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>       
      */}
        {/*<div className='contact-info'>*/}
        <div className='title-holder'>
          <h2>Contact me</h2>
          <p>I am activly looking for entry level software developer position.</p>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fa fa-envelope" style={{ fontSize: '20px' }}></i>
                <a href="mailto: jenniferwpdx2018@gmail.com"> jenniferwpdx2018@gmail.com</a>
              </li>
              <li>
                <i className="fa-brands fa-linkedin" style={{ fontSize: '20px' }}></i>
                <a href="https://www.linkedin.com/in/jennifer-wang20"> jennifer-wang20</a>
              </li>
              <li>
                <i className="fa-brands fa-square-github" style={{ fontSize: '22px' }}></i>
                <a href="https://github.com/jenniferw2019"> jenniferw2019</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;