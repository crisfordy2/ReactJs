import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Elementos from './Elementos';

function App() {
  const[search, setSearch] = useState("")
    const handleChange = (event)=>{
        setSearch(event.target.value);    
    };

    return(
      <div>
          <input type="text" placeholder="Search" value={search} onChange={handleChange} />
          <Elementos search={search}/>
      </div>
    )
}

export default App;
