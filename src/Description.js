import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import CardText from 'react-bootstrap/esm/CardText';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './Description.css';

function TextExample() {
  return (
    <Container fluid>
    <Row className="description-row">
        <CardGroup>
            <Col>
            <Card>
                <CardText className='card-description'>
                </CardText>
            </Card>
            </Col>
            <Col>
            <Card className='card-descriptions'>
                <CardTitle>Features</CardTitle>
                <Card.Text className='card-content'>
                Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit. Curabitur nec fringilla sem. Nullam at diam et ligula tincidunt luctus. Ut fringilla vitae orci eget suscipit. Etiam ultricies justo ac feugiat dignissim.
                </Card.Text>
            </Card>
            </Col>
        </CardGroup>
    </Row>
    <Row className="description-row">
        <CardGroup>
            <Col>
            <Card className='card-descriptions'>
                <CardTitle>
                    Care Instructions
                </CardTitle>
                <Card.Text className='card-content'>
                Ut at ante diam. Vestibulum tincidunt lacus quis odio iaculis, nec iaculis ipsum hendrerit.
                </Card.Text>
            </Card>
            </Col>
            <Col>
            <Card className='card-description'>
                <CardText></CardText>
            </Card>
            </Col>
        </CardGroup>
    </Row>
    </Container>
  );
}

export default TextExample;