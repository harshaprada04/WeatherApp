import Context from "./../context/context";
import { useState, useContext, useEffect } from "react";
import CountryDetailsPage from "./CountryDetailsPage";
import { useLocation } from "react-router-dom";
import { getCountryDetailInfo } from "./../actions/country";

function CountryDetails() {
  const contexts = useContext(Context);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const location:any = useLocation();
  const {country} = location?.state ;

  const getCoutryData = async (country: any) => {
    getCountryDetailInfo(country)
      .then((response: any) =>{
        contexts.setDetails(response)
      } )
      .catch(() =>{setError(true)} )
      .finally(() => {setLoading(false)});
  };

  useEffect(() => {
    getCoutryData(country);
  }, [country]);

  return (
    <div data-testid="map_div">
      {error && "Please Enter a proper country name"}
      {contexts.details.map(
        (
          data: {
            capital: string;
            population: string;
            latlng: [number, number];
            flags: { png: string };
            coatOfArms: { png: string };
          },
          index: number
        ) => (
          <div data-testid="post-0" key={index}>
            <CountryDetailsPage
              capital={data.capital}
              population={data.population}
              latlng={data.latlng}
              flag={data.flags}
              coatOfArms={data.coatOfArms}
              key={Math.floor(Math.random() * 10)}
            />
          </div>
        )
      )}
    </div>
  );
}

export default CountryDetails;
