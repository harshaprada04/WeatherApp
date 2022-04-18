import { useNavigate } from "react-router";
import classes from "./CountryDetailsPage.module.css";
import Card from "./Card";

function CountryDetailsPage(props: {
  capital: string;
  population: string;
  latlng: number[];
  flag: { png: string };
}): any {
  const navigation = useNavigate();
  return (
    <Card>
      <div className={classes.main_div}>
        <table>
          <tbody>
            <tr>Captail : {props.capital}</tr>
            <tr>Country's Population : {props.population}</tr>
            <tr>Longitude : {props.latlng[1]}deg</tr>
          </tbody>
        </table>
        <img className={classes.flag} src={props.flag.png} alt="Flag" />
        <h2
          className={classes.flag_url}
          onClick={() => navigation(`/flagImage?flag_url=${props.flag.png}`)}
        >
          Image Url
        </h2>
        <button
          className={classes.btn}
          onClick={() => {
            navigation(`/weather?capital=${props.capital}`);
          }}
        >
          Captail
        </button>
        <button
          className={classes.btn}
          onClick={() => {
            navigation("/");
          }}
        >
          Previous Page
        </button>
      </div>
    </Card>
  );
}

export default CountryDetailsPage;
