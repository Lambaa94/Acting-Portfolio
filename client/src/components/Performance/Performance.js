import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Performance.css";

function Performance() {

    return(
<>

<Link to="/gallery">
       <i class="fas fa-3x fa-arrow-circle-left otherPageTwo"></i></Link>
        <Container>
<Row>
    <Col>
            <Image src="/images/img_5593.jpeg" alt="Hannah Ryen" className="performancePics"></Image>
    </Col>
</Row>


<Row>
    <Col>
            <Image src="images/IMG_5929.JPG" alt="Hannah Ryen" className="performancePics"></Image>
    </Col>


</Row>

<Row>
    <Col>
            <Image src="/images/img_5572.jpeg" alt="Hannah Ryen" className="performancePics"></Image>
    </Col>

</Row>
        
        
        </Container>

</>
    )
}

export default Performance;