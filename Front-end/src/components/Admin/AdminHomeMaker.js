import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import Navbar from './Navbar';



function AdminCustomer() {
    const TableCellStyle = { color: "white",Height:"auto",width:"20px"}
    const ContainerStyle = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", width: "75%", padding: "15px", margin: "30px auto" }
    const [hmaker, setHmaker] = useState([])
    useEffect(() => {
        fetch("http://localhost:9090/get")
            .then(res => res.json())
            .then((result) => {
                setHmaker(result);
            }
            )
    }, [])
    return (
        <>
        
        <Navbar/>
        <Container style={ContainerStyle}>
            <h1>HomeMakers Profiles</h1>
            <Table>
                <TableHead style={{ backgroundColor: "black" }}>
                    <TableRow>
                        <TableCell align='center' style={TableCellStyle}>Name</TableCell>
                        <TableCell align='center' style={TableCellStyle}>kitchenname</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Email</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Mobile No</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Address</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Opening Time</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Closing Time</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Locatio</TableCell>



                    </TableRow>
                </TableHead>

                <TableBody style={{ backgroundColor: "grey" }}>
                    {hmaker.map((row) => (
                        <TableRow>
                            <TableCell align='center'>{row.username}</TableCell>
                            <TableCell align='center'>{row.kitchenname}</TableCell>
                            <TableCell align='center'>{row.emailId}</TableCell>
                            <TableCell align='center'>{row.mobileNo}</TableCell>
                            <TableCell align='center'>{row.address}</TableCell>
                            <TableCell align='center'>{row.opening_time}</TableCell>
                            <TableCell align='center'>{row.closing_time}</TableCell>
                            <TableCell align='center'>{row.location}</TableCell>

                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </Container>
        
        </>
    )

}

export default AdminCustomer