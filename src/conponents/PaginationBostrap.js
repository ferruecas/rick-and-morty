import React from "react";
import { Pagination } from 'react-bootstrap';

const PaginationBostrap = ({ pageIndex, pages, onClick }) => {


  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item  key={number} active={number === pageIndex} onClick={() => onClick(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Pagination className=" mt-2 mb-2 pagination justify-content-center">{items} </Pagination>
    </>
  )

};

export default PaginationBostrap


