import axios from "axios";


const countryAPI = axios.create({
  baseURL: "https://restcountries.com/",
});

countryAPI.interceptors.response.use((response) => {
  if (response.data.status >= 400) {
    throw new Error(response.data.message);
  } else {
    return response.data;
  }
});

export const getCountryInfo = (countryName:string) => {
  return countryAPI.get(`v3.1/name/${countryName}`);
};