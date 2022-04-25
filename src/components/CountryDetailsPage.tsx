import { useNavigate } from "react-router";
import classes from "./CountryDetailsPage.module.css";
import Card from "./Card";
import { Button, ButtonGroup } from "@mui/material";

function CountryDetailsPage(props: {
  capital: string;
  population: string;
  latlng: number[];
  flag: { png: string };
  coatOfArms:{png:string};
}): any {
  const navigation = useNavigate();
  return (
    <div>
      <Card>
        <table>
          <tbody>
            <tr>
              <td data-testid="country_capital">Capital : {props.capital}</td>
            </tr>
            <tr>
              <td data-testid="population">
                Country's Population : {props.population}
              </td>
            </tr>
            <tr>
              <td data-testid="latitude">Latitude : {props.latlng[0]}deg</td>
            </tr>
            <tr>
              <td data-testid="longitude">Longitude : {props.latlng[1]}deg</td>
            </tr>
          </tbody>
        </table>
        <img
          data-testid="flagImage"
          className={classes.flag}
          src={props.flag.png}
          alt="Contry's Flag"
        />
        <h2
          data-testid="flag_url"
          onClick={() => navigation(`/flagImage?flag_url=${props.flag.png}`)}
          className={classes.flag_url}
        >
          Image Url
        </h2>
        <ButtonGroup className={classes.btn}>
          <Button
          data-testid = "capital_weather"
            style={{
              fontFamily: "'BIZ UDMincho', serif",
              borderRadius: "5px",
              textTransform: "none",
            }}
            className={classes.btns}
            name="capital"
            variant="contained"
            color="secondary"
            onClick={() => {
              navigation(`/weather?capital=${props.capital}`);
            }}
          >
            Capital Weather
          </Button>
          <Button
            data-testid = "Previous"
            style={{
              fontFamily: "'BIZ UDMincho', serif",
              borderRadius: "5px",
              textTransform: "none",
            }}
            variant="contained"
            color="secondary"
            onClick={() => {
              navigation("/");
            }}
          >
            Previous Page
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}

export default CountryDetailsPage;
