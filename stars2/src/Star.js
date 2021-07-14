import React from 'react';
import { FaStar } from "react-icons/fa";

export default function Start({selected = false, onSelect = nothing => nothing}){
    return(        
    <FaStar color = {selected ? 'red' : 'grey'} onClick={onSelect} />    
    );
}
