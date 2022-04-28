import { useNavigate } from "react-router";
import classes from "./CountryDetailsPage.module.css";
import Card from "./Card";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  Typography,
  TableRow,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

function CountryDetailsPage(props: {
  capital: string;
  population: string;
  latlng: number[];
  flag: { png: string };
  coatOfArms: { png: string };
}): any {
  const navigation = useNavigate();
  return (
    <div>
      <Card>
        <Button
          style={{ textTransform: "none" }}
          data-testid="previous"
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => {
            navigation("/");
          }}
        >
          Back
        </Button>

        <div className={classes.allignment}>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "125px",
            }}
          >
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography data-testid="country_capital">
                    Capital : {props.capital}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography data-testid="population">
                    Country's Population : {props.population}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography data-testid="latitude">
                    Latitude : {props.latlng[0]}deg
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography data-testid="longitude">
                    Longitude : {props.latlng[1]}deg
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <img
            data-testid="flagImage"
            className={classes.flag}
            src={props.flag.png}
            alt="Contry's Flag"
          />
          <Button
            className={classes.capital_btn}
            data-testid="capital_weather"
            style={{
              textTransform: "none",
            }}
            name="capital"
            variant="contained"
            color="primary"
            onClick={() => {
              navigation(`/weather?capital=${props.capital}`);
            }}
          >
            Capital Weather
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default CountryDetailsPage;
