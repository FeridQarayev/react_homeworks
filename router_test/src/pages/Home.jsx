import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

function Home() {
  const [dataa, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) =>
      setData(res.data)
    );
  }, []);

  return dataa.map((item) => {
    console.log(item);
    return (
      <Card key={item.id} sx={{ minWidth: 200, display: "inline-block" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.quantityPerUnit}
          </Typography>
          <Typography variant="body2">
            UnitPrice: {item.unitPrice}
            <br />
            UnitsInStock: {item.unitsInStock}
          </Typography>
        </CardContent>
      </Card>
    );
  });
}

export default Home;
