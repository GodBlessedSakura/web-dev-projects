import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import pinyouImg1 from '../assets/img/pinyou-img1.JPG'
import pinyouImg2 from '../assets/img/pinyou-img2.JPG'
import pinyouImg3 from '../assets/img/pinyou-img3.JPG'
import mapdiaryImg1 from '../assets/img/mapdiary-img1.JPG'
import mapdiaryImg2 from '../assets/img/mapdiary-img2.JPG'
import mapdiaryImg3 from '../assets/img/mapdiary-img3.JPG'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const pinyou = [
    {
      title: 'Pinyou Shopping',
      description: 'Go to page',
      pageUrl: '/shopping',
      imgUrl: pinyouImg1,
    },
    {
      title: 'Pinyou Shopping',
      description: 'Go to page',
      pageUrl: '/shopping',
      imgUrl: pinyouImg2,
    },
    {
      title: 'Pinyou Shopping',
      description: 'Go to page',
      pageUrl: '/shopping',
      imgUrl: pinyouImg3,
    },
  ]
  const mapdiary = [
    {
      title: 'Map Diary',
      description: 'Go to page',
      pageUrl: '/map',
      imgUrl: mapdiaryImg1,
    },
    {
      title: 'Map Diary',
      description: 'Go to page',
      pageUrl: '/map',
      imgUrl: mapdiaryImg2,
    },
    {
      title: 'Map Diary',
      description: 'Go to page',
      pageUrl: '/map',
      imgUrl: mapdiaryImg3,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    During my self-study in website development, I completed several projects including e-commerce website and map-diary website. These projects were aimed at improving my coding skills and website development experience, while also allowing me to gain an understanding of both
                    front-end and back-end development processes.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Pinyou Shopping</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Map Diary</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Silent Chat</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <p>
                          Pinyou Shopping is a static e-commerce Web App with home page, login page and list page. In this project, I practised the entensive usage of HTML5 and CSS3 for page layout and detailed styles. I used original JS API to add a few animations such as countdown boxes and
                          carousel figures.
                        </p>

                        <Row>
                          {pinyou.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Map Diary is a light-weight web application where you can keep diaries and record places where exciting moments happens. Click on the link below, create an account and have a try!</p>
                        <Row>
                          {mapdiary.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          With ChatGPT becoming increasingly popular, I am also interested in such a phenomenal AI language model, and that's why I developed this mini small tool. Silent Chat is an auto-reply tool for Wechat which utilizes OCR to detect and parsing incoming messages on your PC,
                          forwards it to ChatGPT and generates responses automatically. From extensive tests, the OCR recognition accuracy is around 94% for pure text, which sounds a good performance. However, it seems quite difficult to optimize Silent Chat simply with OCR detection. Here are some
                          reasons:
                          <hr style={{ visibility: 'hidden' }} />
                          <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                            <li>1. The user have to keep Wechat client in the front window (no user experience at all!)</li>
                            <li>2. Hard to generate a stable and unique id for each conversation to maintain a record of chat contexts and let ChatGPT "remember" each conversation.</li>
                            <li>3. Unbale to understand emojis and pictures.</li>
                            <li>4. Occational wrong parsing of characters.</li>
                          </ul>
                          Unfortunately, Wechat does not offer any API to directly log in to account and fetch conversation details. Otherwise, this chatbot tool would be more useful and practical. Looking forward to someday when Wechat can provide such APIs.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
