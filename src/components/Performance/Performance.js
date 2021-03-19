import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Performance.css";

function Performance() {

    return(
<>

<Link to="/gallery">
       <i class="fas fa-3x fa-arrow-circle-left otherPageTwo"></i></Link>
       <br/>
       <br/>
       <br/>
        <Container>
<Row>
    <Col>
            <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img_5593.jpeg?raw=true" alt="Hannah Ryen" className="performancePics"></Image>
    </Col>
</Row>

<br/>
<Row>
    <Col>
            <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/IMG_5929.JPG?raw=true" alt="Hannah Ryen" className="performancePics"></Image>
    </Col>


</Row>
<br/>
<Row>
    <Col>
            <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img_5572.jpeg?raw=true" alt="Hannah Ryen" className="performancePics"></Image>
    </Col>

</Row>
        
        
        </Container>

</>
    )
}

export default Performance;