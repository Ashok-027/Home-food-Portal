import { Button} from '@mui/material'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';


import './Profile.css';

function Profile(){

    const {kitchenname} = useParams();

    console.log(kitchenname)

    // const initialValues={menu_id:"",menu_name:"",menu_description:"",menu_cost:"",kitchenname:"",homemakerid:""}
    // const[data,setData]=useState(initialValues);
    const[data,getData]=useState([]);


    useEffect(() => {
       
        return fetch(`http://localhost:6060/menu/showkitchens/${kitchenname}`
      ).then((res) => 
          res.json())
          .then((response)=>{
            console.log(response)
            getData(response);
    
          });


    
    
         
        
      }, []);

      const[mobile,getMobile]=useState('')
      useEffect(()=>{
        return fetch(`http://localhost:9090/getm/${kitchenname}`
        ).then((res) => 
            res.json())
            .then((response)=>{
              console.log(response)
              getMobile(response);
      
            });



      },[]);
    return(
        <>


        <Navbar/>

           
            <div className="container">
            
            
               <div>
                 <div className="left">
                 {/* <img
                    className='image_left'
                    alt='Food Images'
                    src='food.jpg'
                    layout='fill'
                /> */}
                 </div>
                 <div className="right">
                    <div className="content">
                        <h1>Hi, This is {kitchenname}</h1>
                        <p>Thanks for choosing me</p>
                    </div>
                    <br/>
                    <div>
                    <a target="_blank" href={`https://api.whatsapp.com/send/?phone=91${mobile}` }><Button  style={{
                     borderRadius: 35,
                    backgroundColor: "#21b6ae",
                    //  padding: "18px 36px",
                    fontSize: "18px",
                    top:"50px",
                    right:"120px",
                    left:"10px"
                    
                   }} variant='contained' >Order through Chat via Whatsapp</Button></a>
                </div>
                </div>
               </div>
               
            
            {/* <h1>Available Food Dishes In My Kitchen</h1> */}
            
             <div className='table-responsive-sm'>
          <table id="center1">
            <thead>
              <tr>
                {/* <th> Food Item Id </th>  */}
                {/* <th>Item Image</th> */}
                <th> Food Item Name</th>
                {/* <th> Food Item Type</th> */}
                <th> Food Item Description</th>
                {/* <th> Quantity </th> */}
                <th> Price</th>
                
              </tr>
            </thead>

            <tbody>
            {data.map((item, i) => (
                    <tr key={i}>
                        {/* <td>{item.menu_id}</td> */}
                        <td>{item.menu_name}</td>
                        <td>{item.menu_description}</td>
                        <td>{item.menu_cost}</td>
                  
                
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </div>
        </>
    );
}
export default Profile;