import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/john_deere_logo.jpeg'
import img2 from '../assets/images/umpqua_bank_logo.jpeg'
import img3 from '../assets/images/htf_logo.jpeg'
import img4 from '../assets/images/nll_logo.jpeg'

function AppExperiences() {
  return (
    <section id="experiences" className="experiences-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Experiences</h2>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div>
                <Image src={img1}
                      style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%", // Makes the image circular
                            objectFit: "cover",  // Ensures the image fits properly within the circle
                       }}
                />
              </div>
              <div style={{ fontSize: '25px'}}>&nbsp;John Deere (Purdue Data Mine)</div>
            </Accordion.Header>
            <Accordion.Body>
              <p style={{ fontStyle: 'italic' }}>- Undergraduate Researcher -</p>
              <p>
                Research and develop a process to automate recognizing when two or more geometry objects cover the same geospatial 
                area. Create criteria to evaluate the different geometry objects and determine the "best" geometry object to 
                represent the field, or to find a way to combine all these boundaries together into a single boundary.
              </p>
              <p style={{ fontStyle: 'italic' }}>Aug 2024 -- present</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
            <div>
                <Image src={img2}
                      style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%", // Makes the image circular
                            objectFit: "cover",  // Ensures the image fits properly within the circle
                       }}
                />
              </div>
              <div style={{ fontSize: '25px'}}>&nbsp;Umpqua Bank</div>
            </Accordion.Header>
            <Accordion.Body>
              <p style={{ fontStyle: 'italic' }}>- Software Development Intern -</p>
                <p>
                  Supported the Salesforce release engineering function within the Core Platform team. Facilitated the management 
                  and configuration of the non-production environments and drove the automation of release notes for production 
                  releases. Assisted with promoting change throughout the environments. Reviewed, researched and resolved incoming 
                  service requests to support the needs of end users.
                </p>
                <p style={{ fontStyle: 'italic' }}>May 2024 -- Aug 2024</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            <div>
                <Image src={img3}
                      style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%", // Makes the image circular
                            objectFit: "cover",  // Ensures the image fits properly within the circle
                       }}
                />
              </div>
              <div style={{ fontSize: '25px'}}>&nbsp;Hack the Futute</div>
            </Accordion.Header>
            <Accordion.Body>
              <p style={{ fontStyle: 'italic' }}>- Back-end Developer -</p>
                <p>
                  Developed an interactive scheduling interface that can be integrated into current website. Implemented key 
                  back-end features to ensure seamless client-side interactions.
                </p>
                <p style={{ fontStyle: 'italic' }}>Oct 2023 -- May 2024</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
            <div>
                <Image src={img4}
                      style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%", // Makes the image circular
                            objectFit: "cover",  // Ensures the image fits properly within the circle
                       }}
                />
              </div>
              <div style={{ fontSize: '25px'}}>&nbsp;No Limit Living</div>
            </Accordion.Header>
            <Accordion.Body>
              <p style={{ fontStyle: 'italic' }}>- Web Developer -</p>
                <p>
                  Created React components to embed analytics into the html file, showing live statistics to user. Executed 
                  usability and functionality testing, documenting and reporting test results to back end team for bug fixes.
                </p>
                <p style={{ fontStyle: 'italic' }}>Aug 2023 -- May 2024</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Container>
    </section>
  );
}

export default AppExperiences;