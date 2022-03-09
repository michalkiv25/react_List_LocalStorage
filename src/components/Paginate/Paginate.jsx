import React from 'react';
import ReactPaginate from 'react-paginate';

import './Paginate.css';

function Paginate({pageCount,pageChange}) {
    
  return (
    <div>
        <br></br>
        <ReactPaginate
            previousLabel={"Previous"} 
            nextLable={"Next"}
            pageCount={pageCount}
            onPageChange={pageChange}
            containerClassName={"paginationBttns"}
            disabledClassName={"disabledPage"}
            activeClassName={"activePage"}
        >
    </ReactPaginate>
    </div>
  )
}

export default Paginate