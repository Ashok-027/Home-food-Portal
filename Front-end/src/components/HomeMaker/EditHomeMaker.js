import React, { useState,useEffect} from 'react'
import { Grid } from '@material-ui/core'

//import RestaurantService from '../../services/RestaurantService';
import Navbar from './Navbar';
import './HomeMakerHome.css';
export default function EditHomeMaker(){

    const homemakerid=JSON.parse(localStorage.getItem("id"));
    console.log(homemakerid)
    const initialValues = { username: "", emailId: "", mobileNo: "", address: "", password: "" , location:"", kitchenname:"", opening_time:"", closing_time:""};
    const [user, setUser] = useState(initialValues);

   


      useEffect(() => {
       
        return fetch(`http://localhost:9090/profile/${homemakerid}`
      ).then((res) => 
          res.json())
          .then((response)=>{
            console.log(response)
            setUser(response);
    
          });
    
         
    
         
        
      }, []);
    
    
    
        return (
            <>
            <Navbar/>

            < Grid  className='gridd'>
                   
                            <h2 id="prof"><b>Your Profile</b></h2>
                                           
                                    <table className='profile-table'>
                                        <tr>
                                            <td>
                                            Name   
                                             </td>
                                            <td>
                                            {user.username}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> Kitchen Name </td><td>{user.kitchenname}</td>
                                            </tr>
                                        <tr>
                                            <td> Email Id </td><td>{user.emailId}</td>
                                            </tr>
                                        <tr>
                                            <td> Mobile No </td><td>{user.mobileNo}</td>
                                            </tr> 
                                        <tr>
                                            <td> Address </td><td>{user.address}</td>
                                            </tr>
                                        <tr>
                                            <td> Location </td><td>{user.location}</td>
                                            </tr>    
                                        <tr>
                                            <td> Opening Time </td><td>{user.opening_time}</td>
                                            </tr>
                                       <tr>
                                            <td> Closing Time </td><td>{user.closing_time}</td>
                                            </tr>
                                </table>                              
                            </Grid>
                    </>
                   
        )
    
}
 
