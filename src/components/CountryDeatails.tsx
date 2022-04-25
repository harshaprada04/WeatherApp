import Context from "./../context/context";
import { useContext, useEffect } from "react";
import CountryDetailsPage from "./CountryDetailsPage";
import { useLocation } from "react-router";
import { getCountryDetailInfo } from "./../actions/country";


function CountryDetails() {
  const contexts = useContext(Context);
  const { search } = useLocation();
  const country = new URLSearchParams(search).get("country");

  const getCoutryData = async () => {
    const response = await getCountryDetailInfo(country);
    contexts.setDetails(response);
  };

  useEffect(() => {
    if (contexts.details?.length <= 0) {
      getCoutryData();
    }
  }, [country]);

  return (
    <div>
      {contexts.details.map((data:{
        capital:string;
        population:string;
        latlng:[number,number];
        flags:{png:string};
        coatOfArms:{png:string};
      }) => (
        <CountryDetailsPage
          capital={data.capital}
          population={data.population}
          latlng={data.latlng}
          flag={data.flags}
          coatOfArms={data.coatOfArms}
          key={Math.floor(Math.random()*10)}
        />
      ))}
    </div>
  );
}

export default CountryDetails;