
import Card from 'react-bootstrap/Card';
import Image from './Images/livingroomsofa.png';
import CardGroup from 'react-bootstrap/CardGroup';
import CardText from 'react-bootstrap/esm/CardText';
import "./ProductDetails.css";
import CardBody from 'react-bootstrap/esm/CardBody';
import BreadcrumbExample from './Breadcrumb';
import Counter from './Counter';

function ProductDetails({image,title,rate,offer,productdetails,text}) {
  return (
    <CardGroup>
        <Card>
        <Card.Img src={Image}/>
    </Card>
    <Card>
        <BreadcrumbExample />
        <Card.Title>
        {title}
        </Card.Title>
        <CardText>
         <span className='product-price'>{rate}</span> 
         <span>{offer}</span> 
         <span className='product-shipping'>{text}</span> 
          
        </CardText>
        <CardBody>
            <span className='about-product'>
      {productdetails}
      </span>
        </CardBody>
        <Counter />
    </Card>
    </CardGroup>
  );
}

export default ProductDetails;




























/*<Card style={{ width: '18rem' }} orientation="horizontal">
        {jsonData.map((index)=>(
            <img key={index} src={Image} alt='image' />
        ))}
        <Card.Img src={Image}></Card.Img>
      <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
        <Card.Text>
         {rate} {offer}
        </Card.Text>
        <Card.Text>
            {productdetails}
        </Card.Text>
      </Card.Body>
    </Card> */