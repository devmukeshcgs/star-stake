import React from 'react';
import Form  from 'react-bootstrap/Form';
import { ReactComponent as SearchIcon } from '../../../../img/svg/searchIcon.svg';


function Search()  {  

  return (
       <div className="search-bar position-relative">
           <span className="position-absolute start-0">
              <SearchIcon />  
           </span> 
           <Form.Control type="search" placeholder="Search" />
       </div>
    )
  
  }
export default Search;
