import React, { useState, useEffect }from 'react'
import {  Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Navbar from './Navbar';



function AdminCustomer() {
    const TableCellStyle = { color: "white" }
    const ContainerStyle = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", width: "75%", padding: "15px", margin: "30px auto" }
    const [Customer, setCustomer] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/get")
            .then(res => res.json())
            .then((result) => {
                setCustomer(result);
            }
            )
    }, [])
    return (
        <>
        <Navbar/>
        <Container style={ContainerStyle}>
            <h1>Customers Profiles</h1>
            <Table>
                <TableHead style={{ backgroundColor: "black" }}>
                    <TableRow>
                        <TableCell align='center' style={TableCellStyle}>Name</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Email</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Mobile No</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Address</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody style={{ backgroundColor: "grey" }}>
                    {Customer.map((row) => (
                        <TableRow>
                            <TableCell align='center'>{row.username}</TableCell>
                            <TableCell align='center'>{row.emailId}</TableCell>
                            <TableCell align='center'>{row.mobileNo}</TableCell>
                            <TableCell align='center'>{row.address}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </Container>
        </>
    )

}

export default AdminCustomer