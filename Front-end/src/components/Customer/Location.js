import React from 'react'
import { Button, FormControl, InputLabel, Select, MenuItem , TextField} from '@material-ui/core'

function Location() {
    const buttonStyle = {
        backgroundColor: "black", color: "white", display: "flex", marginTop: "30px"
    }
    const [Location, setLocation] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    
   
    return (
        <>
            

            <div className='container rounded-4 p-4' style={{margin: "200px auto" , width : "50%"}}>
                <FormControl fullWidth>
                    <InputLabel id="SelectCity">Select Your City</InputLabel>
                    <Select
                        labelId="SelectCity"
                        id="City"
                        value={Location}
                        label="Location"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                        <MenuItem value={"Vizag"}>Vizag</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Chennai"}>Chennai</MenuItem>
                        <MenuItem value={"Delhi"}>Delhi</MenuItem>
                        <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Enter Pincode" name="pincode" placeholder="Eg. 403451" fullWidth/>

                {/* <h4> Select Your City</h4>
                <select class="form-select" aria-label="Default select example">
                <option selected>Location</option>
                <option value="1">Hyderabad</option>
                <option value="2">Vizag</option>
                <option value="3">Mumbai</option>
                <option value="4">Chennai</option>
                <option value="5">Delhi</option>
                <option value="6">Bangalore</option>
                <option value="7">Pune</option>
            </select> */}
                <Button style={buttonStyle} href="#" >Submit</Button>
            </div>
        </>
    )
}
export default Location