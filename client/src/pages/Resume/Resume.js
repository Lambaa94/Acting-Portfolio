import React from "react";
import { Jumbotron, Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./Resume.css";

function Resume() {

    return(
<>
<br/>

<Container>
<Row>
<Col>
<Image src="/images/img_4379.jpeg" alt="Hannah Ryen" id="resumePic"></Image>

</Col>
<Col>

<span ><i className="far fa-3x fa-file-pdf"></i></span>

<br/>
<h3>Film</h3>
{/* ONE ROW */}
<Row>
<Col>
<p>The Title of the Film</p>
</Col>
<Col>
<p>Lead</p>
</Col>
<Col>
<p>Where/Director</p>
</Col>
</Row>
{/* END OF ROW */}
{/* ONE ROW */}
<Row>
<Col>
<p>The Title of the Film</p>
</Col>
<Col>
<p>Lead</p>
</Col>
<Col>
<p>Where/Director</p>
</Col>
</Row>
{/* END OF ROW */}
{/* ONE ROW */}
<Row>
<Col>
<p>The Title of the Film</p>
</Col>
<Col>
<p>Lead</p>
</Col>
<Col>
<p>Where/Director</p>
</Col>
</Row>
{/* END OF ROW */}

<hr/>

<h3>Theater</h3>
{/* ONE ROW */}
<Row>
<Col>
<p>The Title of the Show
</p>
</Col>
<Col>
<p>Lead</p>
</Col>
<Col>
<p>Where/Director</p>
</Col>
</Row>
{/* END OF ROW */}
{/* ONE ROW */}
<Row>
<Col>
<p>The Title of the Show
</p>
</Col>
<Col>
<p>Lead</p>
</Col>
<Col>
<p>Where/Director</p>
</Col>
</Row>
{/* END OF ROW */}
{/* ONE ROW */}
<Row>
<Col>
<p>The Title of the Show
</p>
</Col>
<Col>
<p>Lead</p>
</Col>
<Col>
<p>Where/Director</p>
</Col>
</Row>
{/* END OF ROW */}

<hr/>

<h3>Training</h3>
{/* ONE ROW */}

    <Col>
<Row>
<p>Acting : ________________
</p>
</Row>

<Row>
<p>Voice : ________________</p>
</Row>

<Row>
<p>Dance : ________________</p>
</Row>
</Col>
{/* END OF ROW */}

<hr/>

<h3>Skills</h3>

<Row>
    <Col>
    <p>Here are some skills that you have.</p>
    </Col>
</Row>
</Col>

</Row>


</Container>


</>
        
    )

}

export default Resume;