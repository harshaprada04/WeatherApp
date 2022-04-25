import axios from "axios";


const accessKey = '70f1dc709374faf6feae6a9b27b4f350'  ;

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