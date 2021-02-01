
import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./About.css"

function About() {

    return (
        <>
<br/>
<Container className="setUp1">
<Row>
  <Col>
  <Image src="images/42C2C5D6-0BD3-4E0E-AA5F-860CCB1C8E16.JPG" alt="Hannah Ryen" id="aboutPic"></Image>
  </Col>

    <Col>
    <Jumbotron className="aboutMe">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae!
<br/>
<br/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae!</p>    
    </Jumbotron>
    </Col>
</Row>
</Container>
<Container className="setUp2">
<Row>
  <Col>
  <Image src="images/42C2C5D6-0BD3-4E0E-AA5F-860CCB1C8E16.JPG" alt="Hannah Ryen" id="aboutPic2"></Image>
  </Col>
</Row>
<br/>
<Row>
    <Col>
    <Jumbotron className="aboutMe2">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae!
<br/>
<br/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae!</p>    
    </Jumbotron>
    </Col>
</Row>
</Container>
</>
    )
}

export default About;