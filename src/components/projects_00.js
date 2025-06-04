import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const projectsData = [
  {
    id: 1,
    image: require('../assets/images/java.png'),
    //time: '2022',
    title: 'Market place',
    description: 'A client/server multi-user e-commerce application developed using Java to provide a platform for both buyers and sellers. The application incorporates concurrency and multithreading techniques to handle multiple users simultaneously, enabling efficient order processing and inventory management.',
    link: 'https://github.com/jenniferw2019/market'
  },
  {
    id: 2,
    image: require('../assets/images/python.png'),
    //time: '2023',
    title: 'Sliding puzzle',
    description: 'A GUI-based sliding puzzle game implemented using Python. This applicaiton designed to challenge user with an interactive and visaully engaging puzzle experience. The project combines Tkinter for the graphical user interface and OpenCV for image processing, offering a seamless and dynamic gaming experience.',
    link: 'https://github.com/jenniferw2019/puzzle'
  },
  {
    id: 3,
    image: require('../assets/images/dart.png'),
    //time: '2024',
    title: 'Explorio',
    description: 'This travel itinerary planner is a versatile mobile application designed to simplify trip planning and enhance the travel experience. Built using Dart and Flutter for a responsive and cross-platform interface, and Firebase for real-time data management, the app enpowers users to organize their travel effortlessly.',
    link: 'https://github.com/jenniferw2019/travel'
  }
]

function AppProjects() {
  return (
    <section id="projects" className="block projects-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Projects</h2>
          {/*<div className="subtitle">my latest projects</div>*/}
        </div>
        <Row>
          {
            projectsData.map(projects => {
              return (
                <Col sm={4} key={projects.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={projects.image} style={{ borderRadius: "10px" }}/>
                      <Card.Body>
                        {/*<time style={{fontSize: '20px'}}>{projects.time}</time>*/}
                        <Card.Title>{projects.title}</Card.Title>
                        <Card.Text>
                          {projects.description}
                        </Card.Text>
                        <a href={projects.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppProjects;