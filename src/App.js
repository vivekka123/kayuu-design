

import './App.css';
import jsonData from "./ProductDetails.json"
import AutoLayoutExample from './Details';
import FormValidationExample from './Form';




function App() {
  return (
    <div className="App">
     {jsonData.map((item)=>(
      <AutoLayoutExample key={item.id} {...item}
      
      />
     ))}
     
    </div>
  );
}

export default App;
