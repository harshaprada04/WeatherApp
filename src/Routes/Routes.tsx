import { Route,Routes } from "react-router";
import CountryDetailsPage from "../components/CountryDetailsPage";
import Homepage from "../components/Homepage";
import Weather from "../components/Weather";

function Routing():any{
    return(
        <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/countryDetails" element= {<CountryDetailsPage/>}></Route>
        <Route path="/weather" element= {<Weather/>}></Route>
        </Routes>
    )
}

export default Routing;