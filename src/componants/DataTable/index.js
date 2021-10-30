import React, { useState, useEffect } from "react";
// DATA TABLES
import DataTable, { createTheme } from "react-data-table-component";
import data from "./data";
//CSS
import DTWrapper, {
  DTContainer,
  DataTableSec,
  OrderSec,
} from "./dataTable.style";
//ICONS

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});
const columns = [
  {
    name: "Date",
    selector: "date",
    sortable: true,
  },
  {
    name: "Type",
    selector: "director",
    sortable: true,
  },
  {
    name: "Start (BTC)",
    selector: "runtime",
    sortable: true,
  },

  {
    name: "Start (BTC) Price",
    selector: "runtime",
    sortable: true,
  },

  {
    name: "Current (BTC)",
    selector: "runtime",
    sortable: true,
  },

  {
    name: "Current (USD)",
    selector: "runtime",
    sortable: true,
  },

  {
    name: "Actions",
    selector: "runtime",
    sortable: true,
  },
];

const CLDataTable = (props) => {
  return (
    <DTWrapper>
      <DTContainer>
        <DataTable
          title={false}
          columns={columns}
          data={data}
          defaultSortFieldId={1}
          pagination
          selectableRows
          fixedHeader={true}
          fixedHeaderScrollHeight={20}
        />
      </DTContainer>
    </DTWrapper>
  );
};
export default CLDataTable;
