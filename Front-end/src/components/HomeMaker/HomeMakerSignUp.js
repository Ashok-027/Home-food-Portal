import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../../App.css';
import Navbar from '../Navbar';

function HomeMakerSignUp() {
  const paperStyle = { padding: 20, height: 'auto', width: 300, margin: "75px 600px 50px", }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0', paddingBottom: 5 }
  const initialValues = { username: "", emailId: "", mobileNo: "", address: "", password: "" , location:"", kitchenname:"", opening_time:"", closing_time:""};
  const [user, setUser] = useState(initialValues);
  const [userErrors, setUserErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserErrors(validate(user));
    setIsSubmit(true);
    const username = user.username;
    const emailId = user.emailId;
    const address = user.address;
    // const pincode = user.pincode;
    const mobileNo = user.mobileNo;
    const password = user.password;
    const location = user.location;
    const kitchenname = user.kitchenname;
    const opening_time = user.opening_time;
    const closing_time = user.closing_time;
    const users = { username, emailId, mobileNo, address, password, location, kitchenname, opening_time, closing_time}

    fetch("http://localhost:9090/homemakersignin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    }).then(() => {
      console.log("New Homemaker Added!")


    })

  }

  useEffect(() => {
    console.log(userErrors);
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [userErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const name = /^[a-zA-Z]+$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (!name.test(values.username)) {
      errors.username = "Username should contain only alphabets";
    }
    if (!values.mobileNo) {
      errors.mobileNo = "Mobile Number required";
    } else if (values.mobileNo.length < 10) {
      errors.mobileNo = "Mobile number must be in 10 Digits";
    } else if (values.mobileNo.length > 10) {
      errors.mobileNo = "Mobile number cannot exceed more than 10 characters";
    }
    if (!values.emailId) {
      errors.emailId = "Email is required!";
    } else if (!regex.test(values.emailId)) {
      errors.emailId = "This is not a valid email format!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    // if (!values.pincode) {
    //   errors.pincode = "pincode   is required";
    // } 
    if (!values.location) {
      errors.location = "Location is required";
    } 
    if (!values.kitchenname) {
      errors.kitchenname = "Kitchen name is required";
    } 
    if (!values.opening_time) {
      errors.opening_time = "Opening timing is required";
    } 
    if (!values.closing_time) {
      errors.closing_time = "Closing time is required";
    }

    return errors;
  };



  return (
    <>
          <Navbar/>

      <div>

        <Paper elevation={10} style={paperStyle}>

          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>HomeMaker SignUp</h2>
          </Grid>

          <form onSubmit={handleSubmit}>

          <TextField label='Username' name="username" placeholder='Enter username' style={{ paddingBottom: 1 }} value={user.username} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.username}</p>
            <TextField label='Email' name="emailId" placeholder='abc@123@gmail.com' style={{ paddingBottom: 1 }} value={user.emailId} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.emailId}</p>
            <TextField label='MobileNo' name="mobileNo" placeholder='987654321' style={{ paddingBottom: 1 }} value={user.mobileNo} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.mobileNo}</p>
            <TextField label='Address' name="address" placeholder='' style={{ paddingBottom: 1 }} value={user.address} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.address}</p>
            <TextField label='Password' name="password" placeholder='' type='password' style={{ paddingBottom: 1 }} value={user.password} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.password}</p>
            {/* <TextField label='Pincode' name="pincode" placeholder='' type='pincode' style={{ paddingBottom: 1 }} value={user.pincode} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.pincode}</p> */}
            <TextField label='Location(City)' name="location" placeholder=''  style={{ paddingBottom: 1 }} value={user.location} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.location}</p>
            <TextField label='Kitchen Name' name="kitchenname" placeholder=''  style={{ paddingBottom: 1 }} value={user.kitchenname} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.kitchenname}</p>
            <TextField label='Opening Time' name="opening_time" placeholder='Opening Time' type='time' style={{ paddingBottom: 1 }} value={user.opening_time} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.opening_time}</p>
            <TextField label='Closing Time' name="closing_time" placeholder='Closing Time' type='time' style={{ paddingBottom: 1 }} value={user.closing_time} onChange={handleChange} fullWidth />
            <p style={{ color: "red" }}>{userErrors.closing_time}</p>
      
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
          </form>

          {Object.keys(userErrors).length === 0 && isSubmit ? (
            //  <div className="ui message success" style={{ color: "green", textAlign: "center", paddingTop: 30, fontSize: "30px" }}>Registered successfully!!!!</div>
            window.location.href = "/HomeMakerLogin"
            
            ) : (
            ""
          )}

        </Paper>

      </div>
    </>

  )
}
export default HomeMakerSignUp
