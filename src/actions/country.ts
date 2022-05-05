import { getCountryInfo } from "../apis/country"

export const getCountryDetailInfo :any = async (countryName:string) => {
    try {
       const response:any =  await getCountryInfo(countryName)
        return response;
    } catch (error) {
        throw error;
    }
}