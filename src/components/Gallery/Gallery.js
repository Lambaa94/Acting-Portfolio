import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
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
      <Container className="gallerySetUp1">
            <Row>
<Col>

<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img_4358.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>
<Col>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/702AA743-1BF8-4834-9CB6-129DF0AB2406.JPG?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>
<Col>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img4368.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>
            </Row>
            <Row>
            <Col>
            <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img4373.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>
</Col>
<Col>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/1FB77BAF-E59E-4BDE-979A-CDCB702D30C0.JPG?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>
</Col>
<Col>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img_4379.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Col>

            </Row>
            <Row>
            <Col>
            
</Col>
<Col>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/A8DB8D68-A494-4001-ACE6-113FE22400D1.JPG?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>
</Col>
<Col>


</Col>

            </Row>
        
        
        
        
       
        
        </Container>

       
      <Container className="gallerySetUp2">
            <Row>


<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img_4358.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Row>
<Row>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/702AA743-1BF8-4834-9CB6-129DF0AB2406.JPG?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Row>
<Row>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img4368.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Row>
            
            <Row>
            <Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img4373.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>
</Row>
<Row>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/1FB77BAF-E59E-4BDE-979A-CDCB702D30C0.JPG?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>
</Row>
<Row>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/img_4379.jpeg?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>

</Row>

            
            <Row>
            
</Row>
<Row>
<Image src="https://github.com/Lambaa94/Acting-Portfolio/blob/main/public/images/A8DB8D68-A494-4001-ACE6-113FE22400D1.JPG?raw=true" alt="Hannah Ryen" className="galleryPics"></Image>
</Row>
<Row>


</Row>

            
        
        
        
       
        
        </Container>

        </>
    )
}

export default Gallery;