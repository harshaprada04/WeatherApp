import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetailsPage from "./CountryDetailsPage";

let AddRouting = () => {
  const baseProps = {
    capital: "New Delhi",
    population: "1380004385",
    latlng: [20, 77],
    flag: {
        png: "www.google.com",
    },
    coatOfArms:{
      png:"www.ddd",
    }
  };
  return (
    <BrowserRouter>
      <CountryDetailsPage {...baseProps}/>
    </BrowserRouter>
  );
};

it("Checking whether the correct props value is passing to respective tags or not",()=>{
  render(<AddRouting/>)
  let captailValue = screen.getByTestId(/country_capital/i);
  let populationValue = screen.getByTestId(/population/i);
  let latitudeValue = screen.getByTestId(/latitude/i);
  let longitudeValue = screen.getByTestId(/longitude/i);
  let flagImageSrcValue = screen.getByTestId(/flagImage/i);
  expect(captailValue.innerHTML).toBe("Capital : New Delhi");
  expect(populationValue.innerHTML).toBe("Country's Population : 1380004385");
  expect(latitudeValue.innerHTML).toBe("Latitude : 20deg");
  expect(longitudeValue.innerHTML).toBe("Longitude : 77deg");
  expect(flagImageSrcValue).toHaveAttribute("src","www.google.com");
  expect(flagImageSrcValue).toHaveAttribute("alt","Contry's Flag");
})

it("Previous Page and Capital Weather button has click event or not", () => {
  render(<AddRouting />);
  let capitalButton = screen.getByTestId(/capital_weather/i);
  let pviousPageButton = screen.getByTestId(/previous/i);
  let capitalButtonClick = fireEvent.click(capitalButton)
  let pviousPageButtonClick = fireEvent.click(pviousPageButton)
  expect(capitalButtonClick).toBe(true);
  expect(pviousPageButtonClick).toBe(true);
});

