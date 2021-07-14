import React from 'react';
import { FaTrash } from "react-icons/fa";
import StarRating from './StartRating';
import { useColors } from './ColorProvider';

export default function Color({id, title, color, rating}){
    const {updateRateColor, removeColor} = useColors();

    return(
        <section>
            <h1>{title}</h1>
            <button onClick={()=> removeColor(id)}><FaTrash /></button>
            <div style={{height: 50, backgroundColor: color}}>

            </div>
            <StarRating selecedStars={rating} onRate={rating => {
                updateRateColor(id, rating)
            }}/>
        </section>
    );
}

