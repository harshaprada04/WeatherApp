import { FormEvent, ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";
import classes from "./HomePage.module.css";
import Card from "./Card";
import { Button, Container, TextField } from "@mui/material";
import Context from "../context/context";

function Homepage(): any {
  const context = useContext(Context)
  const navigation = useNavigate();
  
  const handleSubmit =  () => {
      //  navigation(`/countryDetails?country=${context.country}`);
       navigation(`/countryDetails/`, {
        state: {
          country: context.country,
        },
      });
  };
 
  return (
    <div className={classes.heading}>
      <Container>
        <Card>
          <div className={classes.allignment}>
          <TextField 
          inputProps={{ "data-testid": "content-input" }}
          style={{backgroundColor:"white", textAlign:"center"}}
          id="outlined-basic" 
          label="Country Name" 
          variant="outlined"
          autoComplete="off" 
          onChange={(e) => context.setCountry(e.target.value)}
          value={context.country}/>
          <Button
            style={{
              textTransform: "none",
            }}
            className={classes.btn}
            variant="contained"
            color="primary"
            name="submit"
            onClick={handleSubmit}
            disabled={!context.country}
            data-testid="form_button"
            type="button"
          >
            Submit
          </Button>
          </div>
        </Card>
        </Container>
    </div>
  );
}

export default Homepage;
