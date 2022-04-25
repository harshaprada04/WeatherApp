import Context from "../context/context";
import { FormEvent, ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { getCountryDetailInfo } from "../actions/country";
import classes from "./HomePage.module.css";
import Card from "./Card";
import { Button } from "@mui/material";

function Homepage(): any {
  const [error, setError] = useState<any>("");
  const [country, setCountry] = useState<string>("");
  const navigation = useNavigate();
  const contexts = useContext(Context);
  const handleSubmit = async () => {
    setError("");
    try {
      const response = await getCountryDetailInfo(country);
      contexts.setDetails(response);
      navigation(`/countryDetails?country=${country}`);
    } catch (error: any) {
      setError(error.message);
    }
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <form
        data-testid="input_form"
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
        autoComplete="off"
      >
        <Card>
          <input
            className={classes.input_box}
            placeholder="Country Name"
            data-testid="Country Name"
            onChange={(e) => changeHandler(e)}
            value={country}
            autoComplete="off"
          ></input>
          {error && <div>{error}</div>}
          <Button
            style={{
              fontFamily: "'BIZ UDMincho', serif",
              textTransform: "none",
            }}
            className={classes.btn}
            variant="contained"
            color="secondary"
            name="submit"
            onClick={handleSubmit}
            disabled={!country}
            data-testid="form_button"
            type="submit"
          >
            Submit
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default Homepage;
