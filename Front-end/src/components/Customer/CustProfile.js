import React, { useState,useEffect} from 'react'
import { Grid } from '@material-ui/core'

//import RestaurantService from '../../services/RestaurantService';
import Navbar from './Navbar';
import './CustProfile.css';
export default function EditHomeMaker(){

    const customerid=JSON.parse(localStorage.getItem("id"));
    console.log(customerid)
    const initialValues = { username: "", emailId: "", mobileNo: "", address: "", password: ""};
    const [user, setUser] = useState(initialValues);
    

   


      useEffect(() => {
       
        return fetch(`http://localhost:8080/profile/${customerid}`
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

            < Grid  className='gridProf'>
                   
                            <h2 id="cusprof"><b>Your Profile</b></h2>
                                           
                                    <table className='profile-table-cus'>
                                        <tr>
                                            <td>
                                            Name   
                                             </td>
                                            <td>
                                            {user.username}
                                            </td>
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
                                        
                                </table>                              
                            </Grid>
                    </>
                   
        )
    
}
 
