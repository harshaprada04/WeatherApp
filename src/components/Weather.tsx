import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { getWeatherDetailInfo } from "../actions/weather";
import classes from "./Weather.module.css";
import Card from "./Card";
import { Button } from "@mui/material";

function Weather(): any {
  const navigation = useNavigate();
  const { search } = useLocation();
  const capital = new URLSearchParams(search).get("capital");
  const [weathers, setWeathers] = useState({
    temperature: "",
    wind: "",
    weather_icon: "",
    precip: "",
  });

   const getWeatherInformation = async (capital:any) => {
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
    if (capital) {
      getWeatherInformation(capital);
    }
  }, [capital]);

  return (
    <Card>
      <div className={classes.weather_main_div}>
        <h2 data-testid = "temperature">Temperatute : {weathers.temperature} C</h2>
        <img src={weathers.weather_icon} alt="Weather Icon" />
        <h2>Wind Speed : {weathers.wind}kmph</h2>
        <h2>Precipitation : {weathers.precip}%</h2>
        <Button
          style={{
            fontFamily: "'BIZ UDMincho', serif",
            borderRadius: "5px",
            textTransform: "none",
          }}
          data-testid ="btn" 
          variant="contained"
          color="secondary"
          onClick={() => {
            navigation("/countryDetails");
          }}
        >
          Previous Page
        </Button>
      </div>
    </Card>
  );
}
export default Weather;
