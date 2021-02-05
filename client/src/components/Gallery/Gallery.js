import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Gallery.css";



function Gallery() {

    return (

        <>
       
        
      <Link to="/performance">
       <i class="fas fa-3x fa-arrow-circle-right otherPage"></i></Link>
 
      <br/>
      <br/>
      <br/>
      <Container>
            <Row>
<Col>

<Image src="/images/img_4358.jpeg" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>
<Col>
<Image src="/images/702AA743-1BF8-4834-9CB6-129DF0AB2406.JPG" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>
<Col>
<Image src="/images/img_4368.jpeg" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>
            </Row>
            <Row>
            <Col>
            <Image src="/images/img_4373.jpeg" alt="Hannah Ryen" className="galleryPics"></Image>
</Col>
<Col>
<Image src="/images/1FB77BAF-E59E-4BDE-979A-CDCB702D30C0.JPG" alt="Hannah Ryen" className="galleryPics"></Image>
</Col>
<Col>
<Image src="/images/img_4379.jpeg" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>

            </Row>
            <Row>
            <Col>
            
</Col>
<Col>
<Image src="/images/A8DB8D68-A494-4001-ACE6-113FE22400D1.JPG" alt="Hannah Ryen" className="galleryPics"></Image>
</Col>
<Col>


</Col>

            </Row>
        
        
        
        
       
        
        </Container>

        </>
    )
}

export default Gallery;