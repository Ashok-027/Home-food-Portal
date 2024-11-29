import React, { useState } from 'react'
import { TextField, Button, Typography, Link, Container, FormControl } from '@material-ui/core'
import Navbar from '../Navbar';


function AdminLogin() {
    const containerStyle = { backgroundColor: "white", width: "25%", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", margin: "100px auto" }
    const textFieldStyle = { marginBottom: "15px"}
    const buttonStyle = { backgroundColor: "black", color: "white", marginBottom: "5px" }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {

        setPassword(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin' && password === '12345') {
            window.location.href="/AdminDashboard"

        }

    }

    return (
        <>
        <Navbar/>
            <Container style={containerStyle}>
                <img src="https://thumbs.dreamstime.com/b/admin-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-135742404.jpg" alt='Image not found' width="200" height="200" />
                <form onSubmit={handleFormSubmit}>
                    <FormControl style={{ paddingBottom: "20px" }}>
                        <TextField type="text" id='username' label='Username' style={textFieldStyle} variant='outlined' placeholder='Admin username' value={email} onChange={handleEmailChange} />
                        <TextField type="password" id='password' label='password' style={textFieldStyle} variant='outlined' placeholder='Admin password' value={password} onChange={handlePasswordChange} />
                        <Button type="submit" variant='contained' style={buttonStyle} fullWidth>Submit</Button>
                        <Typography >Go back to Login Home Page?
                            <Link href="/LoginForm" >
                                Login
                            </Link>
                        </Typography>
                    </FormControl>
                </form>
            </Container>
        </>
    )
}
export default AdminLogin;