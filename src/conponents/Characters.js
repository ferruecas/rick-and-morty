import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-3">
                    <div className="card col-md-12" style={{minWidth:"400px"}} >
                    <img src={item.image}/>
                        <div className="card-body">                        
                            <h3 className="card-title">{item.name}</h3> 
                            <h5>Status: {item.status}</h5>    
                            <h5>Specie: {item.species}</h5>  
                            <h5>Gender: {item.gender}</h5>  
                            <h5>Location: {item.location.name}</h5>                                          
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
};

//para que es esto
export default Characters