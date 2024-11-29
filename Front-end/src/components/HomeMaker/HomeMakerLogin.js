import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbar from '../Navbar';
import axios from "axios";


function HomeMakerLogin() {
    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "100px 600px" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0', paddingBottom: 5 }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[msg,setMsg]=useState('');
    const API_URL = "http://localhost:9090/";


     

    const handleClick= async(e)=>{

      e.preventDefault();

      return axios
      .post(API_URL + "homemakerlogin", {
        username,
        password,
      })
      .then((response) => {
       console.log(response.data.token)
        if (response.data.token) {
          // localStorage.setItem("user", "aa");
          // setUserState('myState');
          
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("id", JSON.stringify(response.data.id));
          localStorage.setItem("username", JSON.stringify(response.data.username));
          localStorage.setItem("kitchenname", JSON.stringify(response.data.kitchenname));

          console.log(JSON.stringify(response.data.kitchenname))
          console.log(JSON.stringify(response.data.id))



        }
        if (response.status === 200) {
           window.location.href = "/HomeMakerHome";
           return;
         }
         else {
             setMsg("Invaid username or password")

         }
         console.log(response.status);
       //  return response.data;
      });
     

  };


    return (
        <>
         <Navbar/>
      
            < Grid >
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>HomeMaker Login</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' style={{ paddingBottom: 5 }} value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' style={{ paddingBottom: 15 }} value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required />
                    {/* <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        style={{ paddingBottom: 5 }}
                        label="Remember me"
                    /> */}
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={handleClick} fullWidth>Submit</Button>
                    {/* <Typography >
                        <Link href="/ForgotPassword" >
                            Forgot password ?
                        </Link>
                    </Typography> */}
                    <Typography > Do you have an account ?
                        <Link href="/sign-Up" >
                            Sign Up
                        </Link>
                    </Typography>
                    {/* <Typography >Go back to Login Page ?
                        <Link href="/LoginForm" >
                            Login
                        </Link>
                    </Typography> */}
                    <div>
                        <h4 style={{color:"red",textAlign:'center',marginTop:'20px'}}>{msg}</h4>
                    </div>

                </Paper>
            </Grid>
        </>

    )
}
export default HomeMakerLogin;