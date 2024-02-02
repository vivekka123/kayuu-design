import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TextExample from './Description';
import Reviews from './Reviews';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Description">
        <TextExample />
      </Tab>
      <Tab eventKey="profile" title="Reviews">
        <Reviews />
      </Tab>
    </Tabs>
  );
}

export default FillExample;