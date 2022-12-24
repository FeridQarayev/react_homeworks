import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Box } from "@mui/system";

function About() {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) =>
      setData(res.data)
    );
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "supplierId",
      headerName: "Supplier Id",
      type: "number",
      width: 150,
      sortable: true,
    },
    {
      field: "quantityPerUnit",
      headerName: "Quantity PerUnit",
      type: "number",
      width: 300,
    },
    {
      field: "name",
      headerName: "Name",
    },
  ];
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={dataa}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default About;
