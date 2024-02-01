import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Living Room
      </Breadcrumb.Item>
      <Breadcrumb.Item>
      Sofa
      </Breadcrumb.Item>
      <Breadcrumb.Item>Green Living Room Sofa</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;