import React , {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import { Grid, Paper, TextField, Button, Link } from '@material-ui/core'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

function MenuForm() {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "50px auto" }
    const btnstyle = { margin: '8px 0', paddingBottom: 5 }

    const handleClick=(e)=>{
        e.preventDefault()
        const foodItem={
            foodItem_name,
            foodItem_type,
            description,
            quantity,
            price,
        }
        console.log(foodItem);
        fetch("http://localhost:8083/home-maker/addItem",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(foodItem)
    
      }).then(()=>{
        console.log("New Food Item added")
      })
    }

  const [foodItem_name, setfoodItem_name] = useState('')
  const [foodItem_type,setfoodItem_type] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')  
  const [price, setPrice] = useState('')
  
    
    return (
        <div style={{ width: "100%" }}>
            
        < Grid >
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                      
                        <h2>Add Items</h2>
                    </Grid>
                    <TextField label='Item name' placeholder='Food Item Name' style={{ paddingBottom: 5 }} value={foodItem_name} onChange={(e)=>setfoodItem_name(e.target.value)} fullWidth required />
                   
                        
                    <TextField label='Description' placeholder='Food Item Description' type='text' style={{ paddingBottom: 15 }}  value = {description} onChange = {(e) => setDescription(e.target.value)} fullWidth required />
                    <TextField label='Quantity' placeholder='Food Item Quantity ' type='number' style={{ paddingBottom: 15 }} value = {quantity} onChange = {(e) => setQuantity(e.target.value)} fullWidth required />

                    <TextField label='Price' name="Price" placeholder='Enter Food Item Price' type='number' style={{ paddingBottom: 5 }} value = {price} onChange = {(e) => setPrice(e.target.value)}fullWidth required/>
                
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Upload Image
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add Item</Button>                
                    <Button href="/HomeMakerHomePage" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add More</Button>                

                </Paper>
            </Grid>
            
        </div>
    )
}

export default MenuForm;