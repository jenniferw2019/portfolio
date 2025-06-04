import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const projectsData1 = [
  {
    id: 1,
    image: require('../assets/images/store.png'),
    title: 'E-store',
    description: 'Created an e-commerce web application using Ruby on Rails, featuring product listings, inventory management, and user login.',
    link: 'https://github.com/jenniferw2019/store'
  },
  {
    id: 2,
    image: require('../assets/images/compiler.png'),
    title: 'Simple-C Compiler',
    description: 'Implemented a single-pass compiler for a simplified subset of the C language using Lex, and Yacc.',
    link: 'https://github.com/jenniferw2019/simple-c'
  },
  {
    id: 3,
    image: require('../assets/images/travel.png'),
    title: 'Explorio',
    description: 'Built a travel planner using Dart and Flutter for responsive and cross-platform interface, and Firebase for real-time data management.',
    link: 'https://github.com/jenniferw2019/travel'
  }
]

const projectsData2 = [
  {
    id: 1,
    image: require('../assets/images/shell.png'),
    title: 'MyShell',
    description: 'Developed a Unix-like shell with a tokenizer and parser to handle user input and construct execution trees for complex commands.',
    link: 'https://github.com/jenniferw2019/shell'
  },
  {
    id: 2,
    image: require('../assets/images/path.png'),
    title: 'Pathfinding Visualizer',
    description: 'Created an interactive React app to visualize and animate Dijkstra’s shortest path algorithm on a dynamic grid.',
    link: 'https://github.com/jenniferw2019/pathfinder'
  },
  {
    id: 3,
    image: require('../assets/images/expense.png'),
    title: 'Expense Tracker',
    description: 'Designed a mobile-responsive expense tracker using Vue.js, allowing users to monitor and manage their spending on the go.',
    link: 'https://github.com/jenniferw2019/expense'
  }
]

const projectsData3 = [
  {
    id: 1,
    image: require('../assets/images/weather.png'),
    title: 'Weather App',
    description: 'Developed a Django-based application that fetches and displays real-time weather data for user-specified cities using a third-party API.',
    link: 'https://github.com/jenniferw2019/weather-app'
  },
  {
    id: 2,
    image: require('../assets/images/http.png'),
    title: 'HTTP Server',
    description: 'Engineered a lightweight HTTP server with low-level socket programming, supporting directory browsing, CGI scripts, and usage statistics.',
    link: 'https://github.com/jenniferw2019/http-server'
  },
  {
    id: 3,
    image: require('../assets/images/puzzle.png'),
    title: 'Sliding Puzzle',
    description: 'Created a sliding puzzle game using Python, featuring a GUI built with Tkinter, random puzzle generation, and win condition detection.',
    link: 'https://github.com/jenniferw2019/puzzle'
  }
]

function AppProjects() {
  return (
    <section id="projects" className="block projects-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Projects</h2>
        </div>
        <Row>
          {
            projectsData1.map(projects => {
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

        <Row className="mt-4">
          {
            projectsData2.map(projects => {
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

        <Row className="mt-4">
          {
            projectsData3.map(projects => {
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