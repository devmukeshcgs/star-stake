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
    name: "Requested To",
    selector: "requestedTo",
    sortable: true,
  },
  {
    name: "Memo",
    selector: "memo",
    sortable: true,
  },
  {
    name: "Due Date",
    selector: "dueDate",
    sortable: true,
  },

  {
    name: "Payment Type",
    selector: "paymentType",
    sortable: true,
  },

  {
    name: "Aamount",
    selector: "amount",
    sortable: true,
  },

  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
];

const PaymentTable = (props) => {
  return (
    <DTWrapper>
      <DTContainer>
        <DataTable
          title=""
          columns={columns}
          data={data}
          defaultSortFieldId={1}
          pagination
          selectableRows
        />
      </DTContainer>
    </DTWrapper>
  );
};
export default PaymentTable;
