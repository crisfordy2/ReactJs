import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)];

export default function StarRating({totalStarts=5}){
    const [selectedStar, setSeletedStar] = useState(3);        

    return(
        <>
        {createArray(totalStarts).map((n, i) =>(
            <Star key={i} selected = {i < selectedStar} 
            onSelect={()=> setSeletedStar(i+1) } />
        ))}
        <p>{selectedStar} of {totalStarts} stars</p>    
        </>
    )
}

const Star = ({selected = false, onSelect = nothing => nothing}) => (    
    <FaStar color = {selected ? 'red' : 'grey'} onClick={onSelect} />    
);
