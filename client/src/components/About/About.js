
import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";


function About() {

    return (
        <>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/540x300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/540x300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://via.placeholder.com/540x300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
< Container>
<Row>
    <Col>
    <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
    </Jumbotron> 
    </Col>

    <Col>
    <Image src="https://via.placeholder.com/540x300" rounded />
    </Col>
   
</Row>

<Row>
    <Col>
    <Image src="https://via.placeholder.com/540x300" rounded />
    </Col>

    <Col>
    <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
    </Jumbotron> 
    
    </Col>
   
</Row>

<hr/>
<br/>
<Row>
    <Col>
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
    </Jumbotron> 
    </Col>
   
</Row>
<Row>
    <Col>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, in eius dolorum quidem autem praesentium tenetur eos necessitatibus consectetur libero iste quia totam natus fuga tempora rem ratione. Autem, molestiae!</p>    
    </Col>

</Row>

<Row>
    <Col>
<Jumbotron>
  <h1>Hello again, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
    </Jumbotron> 
    </Col>
   
</Row>
</Container>
</>
    )
}

export default About;