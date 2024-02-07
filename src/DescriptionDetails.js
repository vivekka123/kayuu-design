import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TextExample from './Description';
import Reviews from './Reviews';

function ControlledTabsExample() {


  return (
    
    <Tabs
      id="controlled-tab-example"
      className="card-tab"
    >
      <Tab eventKey="Description" title="Description">
        <TextExample />
      </Tab>
      <Tab eventKey="Reviews" title="Reviews(0)">
       <Reviews />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;