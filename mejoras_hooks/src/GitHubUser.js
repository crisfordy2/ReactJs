import React from 'react';
import useFetch from './hooks';


export default function GitHubUser({user}){
    
    const {loading, data, error} = useFetch(`https://api.github.com/users/${user}`)

    if(loading) return(<h1>Loading....</h1>);
    if(!data) return(null);
    if(error) return(<h1>Error: {JSON.stringify(error)}</h1>);    

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