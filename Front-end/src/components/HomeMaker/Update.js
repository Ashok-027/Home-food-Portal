import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import axios from 'axios';
import { Grid, Paper, TextField, Button } from '@material-ui/core'



const Update = (e) => {
  const { menu_id } = useParams();
  console.log(menu_id);
  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: "50px auto" }
    const btnstyle = { margin: '8px 0', paddingBottom: 5 }
  // const navigate = useNavigate();
  const kitchenname=JSON.parse(localStorage.getItem("kitchenname"));
  const homemakerid=JSON.parse(localStorage.getItem("id"))
  const [menu, setMenu] = useState({
    menu_id: menu_id,
    menu_name: "",
    menu_description: "",
    menu_cost: "",
    kitchenname:kitchenname,
    homemakerid:homemakerid
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setMenu({ ...menu, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = axios.get(`http://localhost:6060/menu/display/${menu_id}`);
        const res = response.json();
        console.log(res)
        setMenu(response.data);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateMenu = (e) => {
    e.preventDefault();
    console.log(menu);
    fetch("http://localhost:6060/menu/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menu)
  
  })
      .then((response) => {
        // navigate("/employeeList");
        window.location.href="/HomeMakerHome"
        console.log(menu)
      })
      .catch((error) => {
        console.log(error);
      });
  };
return (
  <div style={{ width: "100%" }}>
  <Navbar/>
  < Grid >
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            
              <h2>Update Food Items</h2>
          </Grid>
          {/* <TextField label='Item name' fieldName="menuid" placeholder='Food Item Name' style={{ paddingBottom: 5 }} value={menuid}  onChange={(e)=>setData("menuid",e)} fullWidth required /> */}

          <TextField label='Item name' name="menu_name" placeholder='Food Item Name' style={{ paddingBottom: 5 }} value={menu.menu_name} onChange={(e) => handleChange(e)} fullWidth required />
          {/* <TextField label='Item Type' placeholder='Food Item Type' style={{ paddingBottom: 5 }} value={foodItems.foodItem_type} onChange={(e)=>setData("foodItem_type",e)} fullWidth required />     */}

          <TextField label='Description' name="menu_description" placeholder='Food Item Description' type='text' style={{ paddingBottom: 15 }}  value = {menu.menu_description} onChange = {(e) => handleChange(e)} fullWidth required />
          {/* <TextField label='Quantity' placeholder='Food Item Quantity In gm' type='number' style={{ paddingBottom: 15 }} value = {foodItems.quantity} onChange = {(e) => setData("quantity",e)} fullWidth required /> */}

          <TextField label='Price' name="menu_cost" placeholder='Enter Food Item Price' type='number' style={{ paddingBottom: 5 }} value = {menu.menu_cost} onChange = {(e) => handleChange(e)}fullWidth required/>
      
          {/* <div className="form-group mb-2">
          <label className="form-label">Image</label>
          <input
            type="file"
            // id={imgName}
            src={foodItems.imgSrc}
            onChange={(e) => onFileUpload(e)}
          ></input>
          <img height="200" alt=" " src={foodItems.imgSrc} />
        </div> */}
        <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={updateMenu} fullWidth>Update</Button>                
          <Button href="/homemaker/home" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Cancel</Button>                

      </Paper>
  </Grid>
  
</div>
);
};

export default Update;