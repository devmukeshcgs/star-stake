import React from 'react';
import Button  from 'react-bootstrap/Button';
import { ReactComponent as FilterIcon } from '../../../../img/svg/filterIcon.svg';


function FilterSection()  {  

  return (
       <div className="filter-bar">
         <Button >
           <span className="me-2">
              <FilterIcon />  
           </span> 
             Filter
          </Button>
       </div>
    )
  
  }
export default FilterSection;
