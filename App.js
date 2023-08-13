
import JSONDATA from "./MOCK_DATA.json"
import { useState  } from "react" 

function App() {
  const [searchterm, setsearchterm] = useState('');
  return (
<div>
<div className="app"> 
   <input type="text" placeholder="search" onChange={event => {setsearchterm(event.target.value)}}/>
   {JSONDATA.filter((val)=>
   {
    if (searchterm == ""){
      return val
    } else if (val.first_name.toLowerCase().includes(searchterm.toLowerCase())){
     return val
    }
   }).map((val,key) => {
    return (
<div className="user" key={key}>
 <p>{val.first_name}</p>
</div>
      );
   })}
    </div>
</div>
  );
}

export default App;
