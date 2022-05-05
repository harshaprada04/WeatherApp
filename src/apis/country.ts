import axios from "axios";


const countryAPI :any = axios.create({
  baseURL: "https://restcountries.com/",
});

countryAPI.interceptors.response.use((response:any) => {
    return response.data;
});

export const getCountryInfo :any = (countryName:string) => {
  return countryAPI.get(`v3.1/name/${countryName}`);
};