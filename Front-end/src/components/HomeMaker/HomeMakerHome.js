import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import './HomeMakerHome.css';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
function HomeMakerHome() {
  const [data, getData] = useState([]);
  const homemakerid = JSON.parse(localStorage.getItem("id"));
  const name = JSON.parse(localStorage.getItem("username"));
  console.log(JSON.parse(localStorage.getItem("id")));
  useEffect(() => {
    let mounted = true;
    return fetch(`http://localhost:6060/menu/show/${homemakerid}`
    ).then((res) =>
      res.json())
      .then((response) => {
        console.log(response)
        getData(response);

      });

    return () => (mounted = false);
  }, []);

  function handleSubmit(menu_id) {
    console.log(menu_id);
    fetch("http://localhost:6060/menu/delete/" + menu_id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(foodItems)
    }).then(() => {
      alert("Food Item deleted");
      fetch(`http://localhost:6060/menu/show/${homemakerid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(foodItems)
      }).then((res) =>
        res.json())
        .then((response) => {
          console.log(response)
          getData(response);

        });
    });
  }

  const TableCellStyle = { color: "white" }
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "20px 20px",
    borderRadius: "15px",
    margin: "50px auto",
    alignItems: "center"
  }

  return (
    <>

      <Navbar />
      <Container style={containerStyle}>
        <Typography variant="overline" style={{fontSize:"2rem"}}>{name}'s Menu List</Typography>
        <Button href="/addItem" variant="contained" style={{backgroundColor:"red" , color:"white"}}>Add Menu</Button>
        <Table style={{ margin: "15px 0px" }}>
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              <TableCell align="center" style={TableCellStyle}><Typography variant="overline">Food Item Name</Typography></TableCell>
              <TableCell align="center" style={TableCellStyle}><Typography variant="overline">Food Item Description</Typography></TableCell>
              <TableCell align="center" style={TableCellStyle}><Typography variant="overline">Price</Typography></TableCell>
              <TableCell align="center" style={TableCellStyle}><Typography variant="overline">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i}>
                <TableCell align="center"><Typography variant="overline"><b>{item.menu_name}</b></Typography></TableCell>
                <TableCell align="center"><Typography variant="overline"><b>{item.menu_description}</b></Typography></TableCell>
                <TableCell align="center"><Typography variant="overline"><b>Rs. {item.menu_cost}</b></Typography></TableCell>
                <TableCell>
                  <Container style={{ display: "flex", flexDirection: "column" }} >
                    <Button href={`/update/${item.menu_id}`} variant="contained" style={{ backgroundColor: "black", marginBottom: "2px" }}>Update</Button>
                    <Button onClick={(e) => handleSubmit(item.menu_id)} variant="contained" style={{ backgroundColor: "white", color: "black" }}>Delete</Button>
                  </Container>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
}



export default HomeMakerHome;
