import { useNavigate } from "react-router";
import classes from "./CountryDetailsPage.module.css";
import { useLocation } from "react-router-dom";
import { getCountryDetailInfo } from "./../actions/country";
import { useState, useEffect } from "react";
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

function CountryDetailsPage(props: any) {
  const [error, setError] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const location:any = useLocation();
  const {country} = location?.state ;

  const getCoutryData = async () => {
    getCountryDetailInfo(country)
      .then((response: any) =>{
        setCountryData(response)
      } )
      .catch(() =>setError(true) )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getCoutryData();
  }, []);

  const navigation = useNavigate();

  return (
    <div>
       <Typography data-testid="error">{error && "Please Enter a proper country name"}</Typography>
      <Card>
        <Button
          style={{ textTransform: "none" }}
          name="back"
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => {
            navigation("/");
          }}
        >
          Back
        </Button>
{countryData.length>0 && countryData.map((data:any, index:number)=>{
  return(
        <div className={classes.allignment} key ={index} data-testid={`country-${index}`}>
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
                  <Typography textAlign={"left"}>
                    Capital 
                  </Typography>
                </TableCell>
                <TableCell>:</TableCell>
                <TableCell>
                  <Typography data-testid="country_capital">
                    {data?.capital} 
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography data-testid="population">
                    Country's Population
                  </Typography>
                </TableCell>
                <TableCell>
                  :
                </TableCell>
                <TableCell>
                  <Typography data-testid="population">
                    {data?.population}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography data-testid="latitude">
                    Latitude
                  </Typography>
                </TableCell>
                <TableCell>
                   :
                </TableCell>
                <TableCell>
                  <Typography data-testid="latitude">
                   {data?.latlng[0]}deg
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>
                    Longitude
                  </Typography>
                </TableCell>
                <TableCell>
                   :
                </TableCell>
                <TableCell>
                  <Typography data-testid="longitude">
                   {data?.latlng[1]}deg
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <img
            data-testid="flagImage"
            className={classes.flag}
            src={data?.flags.png}
            alt="Contry's Flag"
          />
          <Button
            className={classes.capital_btn}
            data-testid="capital-weather"
            style={{
              textTransform: "none",
            }}
            name="capital"
            variant="contained"
            color="primary"
            onClick={() => {
              navigation(`/weather?capital=${data?.capital}`);
            }}
          >
            Capital Weather
          </Button>
        </div>
          )
        })
}
      </Card>
    </div>
  );
}

export default CountryDetailsPage;
