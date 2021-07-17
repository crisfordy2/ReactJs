import './App.css';
import React, {useEffect, useState} from 'react';

function GitHubUser({user}){
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(!user){
            return;
        }
        setLoading(true);

        fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(setData)
            .then(()=>setLoading(false))
            .catch(setError)
    }, [user]);

    console.log(data)
    console.log("error", error)

    if(loading){
        return(<h1>Loading....</h1>)
    }

    if(!data){
        return(null)
    }

    if(error){
        return(<h1>{error}</h1>)
    }

    return(        
        <div>
            <h1>Usuario: {data.login}</h1>
            <img src={data.avatar_url} alt="img"/>    
            <br />
            <h3>tipo: {data.type} </h3>
            <h3>repositorios: {data.public_repos} </h3>
            <h3>url: <a href={data.html_url}>{data.html_url}</a></h3>
            <h3>fecha de creacion: {data.created_at}</h3>
        </div>
    );
    
}

export default function App (){
    return(
        <GitHubUser user="crisfordy2" />
    );
}
