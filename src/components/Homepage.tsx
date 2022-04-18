import Context from "../context/context";
import { FormEvent, ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { getCountryDetailInfo } from "../actions/country";
import classes from "./HomePage.module.css";

function Homepage(): any {
  const contexts = useContext(Context);
  const [error, setError] = useState<any>("");
  const [country, setCountry] = useState<string>("");
  const navigation = useNavigate();

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

 
  return (
    <div className={classes.main}>
      <form className={classes.display} onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <input className={classes.input_box}
          placeholder="Country Name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setError(false);
            setCountry(e.target.value);
          }}
          value={country}
        ></input>
        {error && <div>{error}</div>}
        <button  name="submit" className={classes.btn} onClick={handleSubmit} disabled={!country} >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Homepage;
