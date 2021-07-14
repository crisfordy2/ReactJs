import React from 'react';
import Color from './Color';
import { useColors } from './ColorProvider';

export default function ColorList(){
    const {colors} = useColors();
    console.log("colores", colors)
    if (!colors.length) {
        return(
            <div>
                No hay colors
            </div>
        ) 
    }

    return (
        <div>
            {colors.map(color => (                
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}

