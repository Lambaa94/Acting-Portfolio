import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import "./Resume.css";

function Resume() {

    return(
<>
<br/>

<Container className="setUpResume1">
<Row>
<Col>
<Image src="/images/img_4379.jpeg" alt="Hannah Ryen" id="resumePic"></Image>

</Col>
<Jumbotron id="resumeJumbo">
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
</Jumbotron>

</Row>


</Container>

{/* SET UP 2 STARTS HERE */}

<Container className="setUpResume2">
<Row>
<Col>
<Image src="/images/img_4379.jpeg" alt="Hannah Ryen" id="resumePic2"></Image>

</Col>
</Row>
<br/>
<Row>

<Jumbotron id="resumeJumbo2">
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
<p>/Director</p>
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
<p>Director</p>
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
<p>Director</p>
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
<p>Director</p>
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
<p>Director</p>
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
<p>Director</p>
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
</Jumbotron>


</Row>


</Container>



</>
        
    )

}

export default Resume;