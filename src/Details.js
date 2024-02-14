import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from './Images/livingroomgreensofa.png';
import CardText from 'react-bootstrap/esm/CardText';
import "./ProductDetails.css";
import CardBody from 'react-bootstrap/esm/CardBody';
import BreadcrumbExample from './Breadcrumb';
import Counter from './Counter';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import { IoSearch } from "react-icons/io5";
import ControlledTabsExample from './DescriptionDetails';

function AutoLayoutExample({title,rate,offer,text,productdetails,categories,content,sale}) {
  return (
    <Container fluid className='product-details'>
      <Row className='products-row'>
        <CardGroup className='products-group'>
        <Col className='product-height'>
        <Card className='products-detail-card'>
          <CardText className='product-text-details'>
        <span className='sale'>{sale}</span>
        <span>
        <IoSearch  className='image-search' />
        </span>
        </CardText>
        <Card.Img src={Image} alt='Image' className='card-image'/>
        </Card>
        </Col>
        <Col>
        <Card className='products-detail-card'>
        <BreadcrumbExample />
        <Card.Title className='product-detail-title'>
        {title}
        </Card.Title>
        <CardText className="product-text-details">
         <span className='product-price'>{rate}</span> 
         <span className='product-offer'>{offer}</span> 
         <span className='product-shipping'>{text}</span> 
          
        </CardText>
        <CardBody className='product-body'>
            <div className='about-product'>
      {productdetails}
      </div>
      <Counter />
      <p className='horizontal-line'></p>
      <span className='card-categories'>{categories}</span>
      <span className='card-categories'> : {content}</span>
        </CardBody>
        
        </Card>
        
        </Col>
        </CardGroup>
        <ControlledTabsExample />
      </Row>
      
    </Container>
  );
}

export default AutoLayoutExample;