import {  useState } from "react";
import { useNavigate } from "react-router";
import classes from "./HomePage.module.css";
import { Button, Container, TextField } from "@mui/material";

function Homepage(): any {
  const[country,setCountry] = useState<string>("")
  const navigation = useNavigate();
  
  const handleSubmit =  () => {
       navigation(`/countryDetails/`, {
        state: {
          country: country,
        },
      });
  };
 
  return (
    <div className={classes.background}>
      <Container>
          <div className={classes.allignment}>
          <TextField 
          inputProps={{ "data-testid": "content-input" }}
          style={{backgroundColor:"white", textAlign:"center"}}
          id="outlined-basic" 
          label="Enter country" 
          variant="outlined"
          autoComplete="off" 
          onChange={(e) => setCountry(e.target.value)}
          value={country}/>
          <Button
            style={{
              textTransform: "none",
            }}
            className={classes.btn}
            variant="contained"
            color="primary"
            name="submit"
            onClick={handleSubmit}
            disabled={!country}
            data-testid="form_button"
            type="button"
          >
            Submit
          </Button>
          </div>
        </Container>
    </div>
  );
}

export default Homepage;
