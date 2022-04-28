import { Route,Routes } from "react-router";
import CountryDetails from "../components/CountryDeatails";
import Homepage from "../components/Homepage";
import Weather from "../components/Weather";

function Routing():any{
    return(
        <div>
        <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/countryDetails" element= {<CountryDetails/>}></Route>
        <Route path="/weather" element= {<Weather/>}></Route>
        </Routes>
        </div>
    )
}

export default Routing;