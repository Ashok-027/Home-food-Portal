import React from 'react'
import { Paper, Button } from '@material-ui/core'
import '../../App.css';
import Navbar from '../Navbar';



function SignUp() {

const PaperStyle = {display:"flex", margin:"250px auto" , backgroundColor: '#00000000' , padding : "20px"}
    const buttonStyle = {
        backgroundColor: "white", color: "red", height: "100px", width: "auto" , margin : "10px" 
    }
    return (
        <>
                <Navbar/>

            <div className='sign-up'> 
            <Paper elevation={10} style={PaperStyle}>
                <Button href="/CusSignUp" style={buttonStyle} variant="contained"><h3>Customer SignUp</h3></Button>

                <Button href="/HomeMakerSignUp" style={buttonStyle} variant="contained"><h3>HomeMaker SignUp</h3></Button>
            </Paper>
            </div>
        </>
)}
export default SignUp;
