import React from 'react';

const tahoe = [
    {
        name: "Freel Peak", 
        elevation: 10891,
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Freel_Peak_from_Tahoe_Rim_Trail.jpg"
    },

    {
        name: "Monument Peak",
        elevation: 10067,
        img: "https://s3-us-west-1.amazonaws.com/peakery-media/images/items/main/cache/monument-peak-laguna-mountains-california_ef9097f2-9186-4250-a0b8-d73c5affb6de.jpg.1920x1440_q95_crop.jpg"
    },
    {
        name: "Pyramid Peak",
        elevation: 9983,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Pyramid_Peak.jpg"
    },
    { 
        name: "Mt. Tallac",
        elevation: 9735,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OjijCXogVV4NKCTxYWFTMQeHXo1xDR9DxQ&usqp=CAU"
    }
];

export default function Elementos(search){    
    if(search.search.length > 0){
        return(
            <Parrafo frase={search.search}/>
        )
        
    }else{    
        return(
            <div className="d-flex">
            {tahoe.map((element, i)=>(
                
                <Card {...element} key={i}/>              
            ))
            }            
        </div>      
        )
    }
}

const Parrafo = (frase) =>{
    console.log("entro", frase, typeof(frase.frase))
    let palabra = frase.frase;
    return (
        <div className="d-flex">
            {tahoe.map((element, i)=>(
                element.name.indexOf(palabra) !== -1 ? <Card {...element} key={i}/> : <span key={i}></span>  
                
            ))
            }            
        </div>
    );
}

const Card = (props)=>{    
    
    return(
        <div className="card" style={{width:350, padding: 10, margin:10}}>
            <img src={props.img} className="card-img-top" alt="algo" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Altura: {props.elevation}</p>                
            </div>
        </div>
    )
}



