import { useContext } from "react";
import Context from "../context/context";
import Card from "./Card";
import { useNavigate } from "react-router";
import classes from "./CountryFlag.module.css"

function CountryFlagPage() {
  const navigation = useNavigate();
  let contexts: any = useContext(Context);
  return (
    <Card>
      <div className={classes.main}>
        <img className={classes.image} src={contexts.details[0].flags.png} alt=" Country Flag "></img>
        <button 
         className={classes.btn}
          onClick={() => {
            navigation("/countryDetails");
          }}
        >
          Previous Page
        </button>
      </div>
    </Card>
  );
}

export default CountryFlagPage;
