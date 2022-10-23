import React, { useEffect, useState } from 'react'

import Characters from './conponents/Characters';
import Page from './conponents/Page';
import Search from './conponents/Search';
import PaginationBostrap from './conponents/PaginationBostrap'



function App() {
  const url = "https://rickandmortyapi.com/api/character";
  //UWU
  //array vacio
  const [characters, setCharacters] = useState([]);
  //objecto vacio
  const [info, setInfo] = useState({});

  const [elements, setElement] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const [search, setSearch] = useState("");


  const fetchCharacters = (url) => {
    //importar WEB api
    fetch(url + '?page=' + pageIndex)
      .then(response => response.json())//convierte a un formato json 
      .then((data) => {
        setCharacters(data.results);
        setElement(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))//mejorar mensaje de error
  };
  const onPrevious = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }

  //Permite manejar los efectos colaterales
  useEffect(() => {
    fetchCharacters(url, pageIndex);
  }, [pageIndex])

  const searchOnclick = () => {

    let array = characters.filter(character =>
      character.name.toUpperCase().includes(search) || character.status.toUpperCase().includes(search) || character.species.toUpperCase().includes(search)
       || character.gender.toUpperCase().includes(search) || character.location.name.toUpperCase().includes(search)
    );
    setElement(array);
  }
  const onChange = (e) => {
    setSearch(e.target.value.toUpperCase());
  }

  const OnClickPage = (e) => {

    setPageIndex(e);
  }
  return (
    //importacion del Navbar.js 
    <>
      <Search
        search={search}
        searchOnclick={searchOnclick}
        searchOnchagen={onChange}
      />
      <PaginationBostrap
      pages={Math.ceil(info.count / 21)} 
      pageIndex={pageIndex} onClick={OnClickPage} />

      {/* pasar propiedades al Page */}

      <div className="container mt-2 mb-2">
        {/* pasar titulo al Characters */}
        <Characters characters={elements} />
      </div>
      <PaginationBostrap pages={Math.ceil(info.count / 21)} pageIndex={pageIndex} onClick={OnClickPage} />

    </>

  );
}

export default App;
