import { AxiosResponse } from "axios";
import { getWeatherInfo } from "../apis/weather";

export const getWeatherDetailInfo:any = async (capital:any) => {
  try {
    const response :AxiosResponse<any>= await getWeatherInfo(capital);
    return response;
  } catch (error) {
    throw error;
  }
};