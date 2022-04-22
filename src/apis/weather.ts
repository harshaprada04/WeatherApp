import axios from "axios";


const accessKey = '06db8d9e0d666474631ca9ee34578b71'  ;

const weatherAPI = axios.create({
  baseURL: "http://api.weatherstack.com/"
});

weatherAPI.interceptors.response.use((response) => {
  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  } else {
    return response.data;
  }
});

export const getWeatherInfo = (capital:string) => {
  return weatherAPI.get(`current?access_key=${accessKey}&query=${capital}`);
};