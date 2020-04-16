import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Title from '../Title';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// const FORM_ACTION = "https://formspree.io/mqkzpbrg";
// const FORM_ACTION = "";

export default class About extends React.Component
{
    state = {
        status: ""
    }

    submitForm = (ev) =>
    {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () =>
        {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200)
            {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else
            {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render()
    {
        return (
            <Container className="text-center about">
                <Title>About</Title>
                <Row className="mb-5">
                    <Col>
                        <p>
                            Hello, I am a person on the internet. I call myself Unskilled Wolf. That name came from my skill at video games.<br />
                            I like to write code, make websites, and I also create art.
                    </p>
                        <p>
                            I started learning programming at a relatively young age. I have learned a few languages so far starting with C++ for a short time and then moving to C#. Some time later, from there I went to learning Python, JS, Processing 3, Bash, ReactJS, and more.<br />
                            Everything that I know, I have thought myself. Also, Linux is my favorite OS.
                    </p>
                        <p>
                            <i>Obviously, don't use my code, art, or characters without my permission</i>
                        </p>
                        <p>
                            <a href="https://github.com/UnskilledWolf">GitHub</a> |
                        <a href="https://www.deviantart.com/hexagonal192">DeviantArt</a> |
                        <a href="https://twitter.com/Unskilled_Wolf">Twitter</a>
                            {/* <a href="/about">Furaffinity<sub>sometime</sub></a> */}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Contact</h3>
                        <p>If you want to contact me, send me a note on DeviantArt or a DM on Twitter.</p>
                        {/* <Form onSubmit={this.submitForm} action={FORM_ACTION} method="POST" className="form">
                            <Form.Group>
                                <Form.Label>Name <small>(or Username)</small></Form.Label>
                                <Form.Control type="text" name="name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Text</Form.Label>
                                <Form.Control as="textarea" name="text" rows="3" />
                            </Form.Group>
                            {this.state.status === "SUCCESS" ? <Button variant="success" disabled>Submited</Button> : <Button variant="primary" type="submit">Submit</Button>}
                            {this.state.status === "ERROR" && <p className="mt-1">There has been an error!</p>}
                        </Form> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}
