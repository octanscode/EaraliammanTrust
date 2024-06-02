"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  { field: "transactionId", headerName: "Transaction ID", width: 200 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "amount", headerName: "Amount", width: 170, type: "number" },
  {
    field: "receipientName",
    headerName: "Receipient Name",
    width: 250,
  },
  {
    field: "projectName",
    headerName: "Project Name",
    width: 250,
  },
  { field: "description", headerName: "Description", width: 300 },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function DataTable({
  data,
  GetSelectedTransactionIdsCallback,
  selectionModel,
}) {
  const transactionsHistoryData = data.map((transaction, index) => {
    return {
      ...transaction,
      date: formatDate(transaction.date),
      id: index + 1,
    };
  });

  const UpdateSelectionModel = (selectedRows) => {
    console.log("Inside UpdateSelectionModel function");
    const selectedTransactions = transactionsHistoryData.filter((row) =>
      selectedRows.includes(row.id)
    );
    const transactionIds = selectedTransactions.map((row) => row.transactionId);
    console.log("Function Selected Transaction IDs:", transactionIds);
    GetSelectedTransactionIdsCallback(transactionIds, selectedRows);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={transactionsHistoryData}
        columns={columns}
        columnHeaderHeight={50}
        getRowHeight={() => 50}
        autoHeight={true}
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "700",
          },
          "& .MuiDataGrid-cell": {
            fontWeight: "500",
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          console.log("The new row selected is ", newRowSelectionModel);
          UpdateSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={selectionModel}
      />
    </div>
  );
}
