import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { getWeatherDetailInfo } from "../actions/weather";
import classes from "./Weather.module.css";
import Card from "./Card";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Context from "../context/context";

function Weather(): any {
  const context = useContext(Context);
  const navigation = useNavigate();
  const { search } = useLocation();
  const capital = new URLSearchParams(search).get("capital");
  const [weathers, setWeathers] = useState({
    temperature: "",
    wind: "",
    weather_icon: "",
    precip: "",
  });

  const getWeatherInformation = async (capital: any) => {
    try {
      const response: any = await getWeatherDetailInfo(capital);
      setWeathers({
        temperature: response.current.temperature,
        wind: response.current.wind_speed,
        weather_icon: response.current.weather_icons,
        precip: response.current.precip,
      });
    } catch (error) {}
  };
  useEffect(() => {
    getWeatherInformation(capital);
  }, [capital]);

  return (
    <Card>
      <Button
        style={{
          textTransform: "none",
          position: "relative",
          top: "10px",
          left: "10px",
        }}
        data-testid="btn"
        variant="contained"
        color="primary"
        onClick={() => {
          navigation(-1)
        }}
      >
        Back
      </Button>
      <div className={classes.weather_main_div}>
        <img
          data-testid="weather_icon"
          src={weathers.weather_icon}
          alt="Weather Icon"
        />
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
            paddingLeft: "20px",
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography data-testid="temperature">
                  Temperatute : {weathers.temperature} °C
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography data-testid="wind_speed">
                  Wind Speed : {weathers.wind}kmph
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography data-testid="pecipitation">
                  Precipitation : {weathers.precip}%
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
export default Weather;
