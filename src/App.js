

import './App.css';
import jsonData from "./ProductDetails.json"
import AutoLayoutExample from './Details';
import FillExample from './DescriptionDetails';



function App() {
  return (
    <div className="App">
     {jsonData.map((item)=>(
      <AutoLayoutExample key={item.id} {...item}
      
      />
     ))}
        <FillExample />
    </div>
  );
}

export default App;
