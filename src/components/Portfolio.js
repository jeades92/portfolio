import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import project1 from "../assets/images/passwordgen.png";
import { ProjectCard } from "./PortfolioCards";
import colorSharp from "../assets/images/color-sharp.png"
import project2 from "../assets/images/rexaddsong.png"
import project3 from "../assets/images/notetaker.png"
import { Link } from "react-router-dom";


export const Portfolio = () => {
    const projects = [
        {
            title: "Password Generator",
            description: (
                <a
                  href="https://github.com/jeades92/reimagined-octo-chainsaw"
                  target="_blank"
                >
                  This is a simple password generator program written in javascript. The program generates a strong and secure password based on user-specified criteria such as length, character sets including uppercase letters, lowercase letters, numbers, and special characters.
                </a>
              ),            imgUrl: project1,
        },
        {
            title: "SongRex",
            description: <a
            href="https://github.com/Lohmarr/songrex"
            target='_blank'
            >
            "SongRex is a full-stack web application that allows users to view songs by genre, artist, and album, and also post new songs by embedding their own favorite songs using Spotify's embed featureusing Node.js and Express.js to create a RESTful API, Handlebars.js as the template engine, and MySQL for the database.",
            </a>,
            imgUrl: project2,
        },
        {
            title: "NoteTaker",
            description:
            
            <a
            href="https://github.com/jeades92/take-notes"
            target='_blank'
            >
            "This is a note-taking application that allows small business owners to organize their thoughts and keep track of tasks they need to complete.",
            </a>,
            
            imgUrl: project3,
        }
    ];

    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        <Tab.Container id="portfolio-tabs" defaultActiveKey="first">
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav> */}
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard 
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp}></img>
        </section>
    )
}