import axios from "axios";


const countryAPI :any = axios.create({
  baseURL: "https://restcountries.com/",
});

countryAPI.interceptors.response.use((response:any) => {
  if (response.data.status >= 400) {
    throw new Error(response.data.message);
    
  } else {
    return response.data;
  }
});

export const getCountryInfo :any = (countryName:string) => {
  return countryAPI.get(`v3.1/name/${countryName}`);
};