import React from "react";

const Search = ({search,searchOnclick,searchOnchagen}) => {
    const style = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
      
      };
    return (
        <>
        <div  style={style} className="pagination justify-content-center p-3">
        <input style={{width:"50%"}} class="form-control" placeholder="Search Status,Specie,Gender and Location" value={search} onChange ={searchOnchagen}/> 
       <button class="btn btn-secondary" onClick={searchOnclick}> Buscar</button>
       </div>
       </>
       )
};


export default Search