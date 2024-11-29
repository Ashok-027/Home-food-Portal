import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow ,TextField } from '@mui/material'
import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import Card from './Card'

import Navbar from './Navbar'
/*function createData(HId,HName,HCity,HFood,HFoodDesc,HProfile){
    return {HId,HName,HCity,HFood,HFoodDesc,HProfile}
}
const rows = [
    createData("1","Jothika","Madhurai","Rice ,Chicken Curry","Tasty and Spicy",)
    
];*/



function CustomerSearch() {
    const buttonStyle = {
        backgroundColor: "black", color: "white", display: "flex", marginTop: "30px"
    }
    const TableCellStyle = { color: "white" }
    const ContainerStyle = { display:"flex" , flexDirection:"column" ,alignItems:"center" , backgroundColor: "#90caf9", width: "75%", padding: "15px", margin: "30px auto",borderRadius: "10px"}
    const initialValues = { city:"" };
    // const [user, setUser] = useState(initialValues);
    const [location, setLocation] = useState(initialValues)
    const[data,getData]=useState([])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocation({ ...location, [name]: value });
        // console.log(location)
      };
    console.log(location)

    

    const handleLocation = ()=>{
        console.log(location.city);
        return fetch(`http://localhost:9090/find/${location.city}`
        ).then((res) => 
            res.json())
            .then((response)=>{
              console.log(response)
              getData(response);
      
            });
  
        
    }
        

    
    return (

        <>
        <Navbar/>
        <div className='cards'>
            <Container style={{ backgroundColor: "#90caf9", padding: "20px",margin:'20px auto'  ,borderRadius: "10px" }}>
            <TextField label='Enter City' name="city" placeholder='Enter Location' style={{ paddingBottom: 1 }} value={location.city} onChange={handleChange} fullWidth />
                <Button style={buttonStyle} href="#" onClick={handleLocation} >Submit</Button>
            </Container>
            </div>
        <div className='cards'>
        <Container style={ContainerStyle}>
            <h1>Home Maker profiles according to your City</h1>
            <Table>
                <TableHead style={{ backgroundColor: "black" }}>
                    <TableRow>
                        {/* <TableCell align='center' style={TableCellStyle}>ID</TableCell> */}
                        <TableCell align='center' style={TableCellStyle}>Kitchen Name</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Opening Time</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Closing Time</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Address</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Location</TableCell>
                        <TableCell align='center' style={TableCellStyle}>Actions</TableCell>

                    </TableRow>
                </TableHead>

                <TableBody style={{ backgroundColor: "white" }}>
                    {data.map((row) => (
                        <TableRow>
                            <TableCell align='center'>{row.kitchenname}</TableCell>
                            <TableCell align='center'>{row.opening_time}</TableCell>
                            <TableCell align='center'>{row.closing_time}</TableCell>
                            <TableCell align='center'>{row.address}</TableCell>
                            <TableCell align='center'>{row.location}</TableCell>
                            
                            {/* <TableCell align='center'><Button variant='contained' href='/profile'>Go To PROFILE</Button></TableCell> */}
                            <TableCell align='center'><Button><Link to={`/profile/${row.kitchenname}`}>Go To PROFILE</Link></Button></TableCell>

                         </TableRow>
                    ))}

                </TableBody> 
             </Table>
        </Container>
        <Card/>

        </div>
        </>
    )

}

export default CustomerSearch