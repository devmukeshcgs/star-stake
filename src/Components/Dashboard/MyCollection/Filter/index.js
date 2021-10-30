import React from 'react';
import Search from "./Search";
import CollectionSection from "./Collection";
import DenominationSection from "./Denomination";
import FilterBarSection from "./Filters";

function FilterSection()  {  

  return (
       <div className="filter-section py-4">
           <div className="d-flex justify-content-between mob-wrap">
             <div className="search-box me-lg-2">
               <Search />
             </div>
             <div className="collection-box me-lg-2">
               <CollectionSection />
             </div>
             <div className="denomination-box me-lg-2">
               <DenominationSection />
             </div>
             <div className="filter-box text-center">
               <FilterBarSection />
             </div>
           </div> 
       </div>
    )
  
  }
export default FilterSection;
