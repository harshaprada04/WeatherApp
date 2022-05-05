import axios from "axios";


const accessKey = '353279a1d745a82960ad9d0ed6c42e1f'  ;

const weatherAPI = axios.create({
  baseURL: "http://api.weatherstack.com/"
});

weatherAPI.interceptors.response.use((response) => {
    return response.data;
});

export const getWeatherInfo = (capital:string) => {
  return weatherAPI.get(`current?access_key=${accessKey}&query=${capital}`);
};