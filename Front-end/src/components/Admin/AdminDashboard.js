
import React from 'react'
import { Button, Container } from '@material-ui/core'
import Navbar from './Navbar'


function AdminDashboard() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "200px auto",
        width: "35%",
        backgroundColor: "white",
        borderRadius: "15px",
        padding:"20px"
    }
    const buttonStyle = {
        backgroundColor: "black", color: "white", height: "100px", width: "auto", margin: "10px"
    }

    return (
        <>
        <Navbar/>
        <Container style={containerStyle}>
            <Button href="/AdminCustomer" style={buttonStyle} variant="contained"><h3>Show Customers</h3></Button>
            <Button href="/AdminHomeMaker" style={buttonStyle} variant="contained"><h3>Show HomeMakers</h3></Button>
        </Container>
        </>
    )
}
export default AdminDashboard;