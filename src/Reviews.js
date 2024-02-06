import React from 'react'
import Card from 'react-bootstrap/Card'
import CardText from 'react-bootstrap/esm/CardText'
import { CiStar } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import './Description.css';

const Reviews = () => {
  return (
    <Card className='review-card'>
        {/* <CardText className='card-review'>
            There is no reviews yet.
        </CardText><br /> */}
        <Card className='review-cards' >
            <Card.Title className='review-title'>
            Be the first to review “Green Living Room Sofa”
            </Card.Title>
            <Card.Text className='review-text'>
            Your email address will not be published. Required fields are marked *
            </Card.Text>
            <Card.Text className='review-rating'>
                Your Ratings 
               <span className='review-star-rating'> <CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></span>
            </Card.Text>
            <Row>
                <Form.Label column lg={12} >
                    Your Review
                    </Form.Label>
                <Form.Control type="text" className='review-comment' />
                
            </Row>
            <Form className='card-form-review'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label className='card-review-label'>Name</Form.Label>
                        <Form.Control type="Name" placeholder="Name" className='review-form-control'/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className='card-review-label'>Email</Form.Label>
                        <Form.Control type="Email" placeholder="Email" className='review-form-control' />
                        </Form.Group>
                        </Row>
                        </Form>
                        <Form.Group className="mb-3" id="formGridCheckbox" >
                            <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." />
                        </Form.Group>
                        <Button variant='warning'>Submit</Button>
        </Card>
    </Card>
  )
}

export default Reviews