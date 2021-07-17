import './App.css';
import React,{useState} from 'react';
import GitHubUser from './GitHubUser'


export default function App (){
    const[searchUser, setSearchUser] = useState()
    const handleChange = (event)=>{
        setSearchUser(event.target.value);
        console.log("value",event.target.value)
    };

    return(
        <div>
            <input type="text" placeholder="Search" value={searchUser} onChange={handleChange} />
            <GitHubUser user={searchUser} />
        </div>
    )
    
}
