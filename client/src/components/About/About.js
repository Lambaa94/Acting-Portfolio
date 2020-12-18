
import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";


function About() {

    return (
        <>
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

</Container>
</>
    )
}

export default About;