import React from 'react';

const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 }
];

function List ({data = [], renderItem, renderEmpty}){
    return !data.length ? (
        <div>
            {renderEmpty()}
        </div>
    ):(
        <ul>
            {data.map((item, i)=>(
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

const RenderItem = (item)=>{
    return(
        <>
            {item.name} - {item.elevation.toLocaleString()}
        </>
    )
}

const RenderEmpty =()=>{
    return(
        <p>Esta lista esta vacia</p>
    );
}

export default function App(){
    return(
        <List data={tahoe_peaks} renderItem={RenderItem} renderEmpty={RenderEmpty}/>
    );
}

