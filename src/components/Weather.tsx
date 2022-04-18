import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { getWeatherDetailInfo } from "../actions/weather";
import classes from "./Weather.module.css"
import Card from "./Card";

function Weather():any {
  const navigation = useNavigate();
  const { search } = useLocation();
  const capital = new URLSearchParams(search).get("capital");
  const [weathers, setWeathers] = useState({
    temperature: "",
    wind: "",
    weather_icon: "",
    precip:""
  });


  const getWeatherInformation = async () => {
    try {
      const response :any= await getWeatherDetailInfo(capital);
      setWeathers({
        temperature: response.current.temperature,
        wind: response.current.wind_speed,
        weather_icon: response.current.weather_icons,
        precip:response.current.precip
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (capital) {
      getWeatherInformation();
    }
  }, [capital]);

  return (
    <Card>
    <div className={classes.weather_main_div}>
      <h2>Temperatute : {weathers.temperature} C</h2>
      <img src={weathers.weather_icon} alt="Weather Icon" />
      <h2>Wind Speed : {weathers.wind}kmph</h2>
      <h2>Precipitation : {weathers.precip}%</h2>
      <button className={classes.btn}
        onClick={() => {
          navigation(-1);
        }}
      >
        Previous Page
      </button>
    </div>
    </Card>
  );
}
export default Weather;
