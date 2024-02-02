import React from 'react'
import Card from 'react-bootstrap/Card'
import CardText from 'react-bootstrap/esm/CardText'
import Container from 'react-bootstrap/esm/Container'
import { CiStar } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

const Reviews = () => {
  return (
    <Container>
        <CardText>
            There is no reviews yet.
        </CardText>
        <Card>
            <Card.Title>
            Be the first to review “Green Living Room Sofa”
            </Card.Title>
            <Card.Text>
            Your email address will not be published. Required fields are marked *
            </Card.Text>
            <Card.Text>
                Your Ratings <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
            </Card.Text>
            <Row>
                <Form.Label column lg={12}>
                    Your Review
                <Col>
                <Form.Control type="text" />
                </Col>
                </Form.Label>
            </Row>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="Name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Email" />
                        </Form.Group>
                        </Row>
                        </Form>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." />
                        </Form.Group>
                        <Button variant='warning'>Submit</Button>
        </Card>
    </Container>
  )
}

export default Reviews