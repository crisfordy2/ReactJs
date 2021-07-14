import React from "react";
import Star from './Star'
import { createArray } from "./utils"

export default function StarRating({ totalStars = 5, selecedStars = 0, onRate = index => index }) {

    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={i < selecedStars}
                    onSelect={() => onRate(i + 1)}
                />
            ))}        
        </>
    );
}