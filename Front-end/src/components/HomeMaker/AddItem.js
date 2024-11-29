import React , {useState} from 'react';

import Navbar from './Navbar';

// import Button from '@mui/material/Button';
import { Grid, Paper, TextField, Button } from '@material-ui/core'


const AddItem=()=> {
  
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "50px auto" }
    const btnstyle = { margin: '8px 0', paddingBottom: 5 }
    const initialValues = { menu_name: "", menu_description: "", menu_cost: ""};
    const [menu, setMenu] = useState(initialValues); 
    const[msg,setMsg]=useState('');

    const homemakerid=JSON.parse(localStorage.getItem("id"));
    console.log(JSON.parse(localStorage.getItem("id")));
    const kitchenname=JSON.parse(localStorage.getItem("kitchenname"));


    const handleChange = (e) => {
      const { name, value } = e.target;
      setMenu({ ...menu, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
     
      const menu_name = menu.menu_name;
      const menu_description = menu.menu_description;
      const menu_cost = menu.menu_cost;
      
      const menus = { homemakerid,kitchenname, menu_name, menu_description, menu_cost }

      console.log(menus);

  
      fetch("http://localhost:6060/menu/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(menus)
      }).then(() => {
        console.log("New Menu is Added!")
  
  
      })
  
    }
  
    function addmenu(){
      
      setMsg("Menu Added!!!");
    }
  
  // function onFileUpload(e) {
  //   var reader = new FileReader();
  //   reader.onload = (e) => {
  //     var base64img = reader.result;
  //     setImgSrc(base64img);
  //     setImgName(e.target.files[0].name);
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // }

    
    return (
        <div style={{ width: "100%" }}>
           <Navbar/>
        < Grid >
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                      
                        <h2>Add Items</h2>
                    </Grid>
                    <form onSubmit={handleSubmit}>

                    {/* <TextField label='Kitchen name' name="kitchen_name" placeholder='Enter your Kitchen Name' style={{ paddingBottom: 5 }}   value={menu.kitchen_name} onChange={handleChange} fullWidth required /> */}

                    <TextField label='Menu name' name="menu_name" placeholder='Enter the Menu Name' style={{ paddingBottom: 5 }}   value={menu.menu_name} onChange={handleChange} fullWidth required />
                    <TextField label='Description' name="menu_description" placeholder='Enter something about your menu'  style={{ paddingBottom: 15 }}    value={menu.menu_description} onChange={handleChange} fullWidth  />
                    <TextField label='Cost' name="menu_cost" placeholder='Cost per Item' style={{ paddingBottom: 50 }}   value={menu.menu_cost} onChange={handleChange} fullWidth required />
                    <div className="form-group mb-2">
                  {/* <label className="form-label">Item Image</label> */}
                  {/* <input
                    type="file"
                    // id={imgName}
                    src={imgSrc}
                    onChange={(e) => onFileUpload(e)}
                  ></input>
    <img height="100" width="auto" alt="" id={imgName} src={imgSrc} /> */}
                    </div> 

                    <Button onClick={addmenu} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Add Item</Button>                
                    <Button href="/HomeMakerHome" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Back to view your menu</Button>            
                    <h1><b>{msg}</b></h1>    
</form>
                </Paper>
            </Grid>
            
        </div>
    )
}

export default AddItem;