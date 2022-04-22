import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetailsPage from "./CountryDetailsPage";
import CountryFlag from "./CountryFlag";
import { MemoryRouter } from "react-router";
import App from "../App";
import Homepage from "./Homepage";
import Weather from "./Weather";

let AddRouting = () => {
  const baseProps = {
    capital: "New Delhi",
    population: "1380004385",
    latlng: [20, 77],
    flag: {
        png: "www.google.com",
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

it("Page has a Previous Page and Captail Weather button or not", () => {
  render(<AddRouting />);
  expect(screen.getByText(/previous page/i)).toBeTruthy();
  expect(screen.getByRole("button",{name:/capital/i})).toBeTruthy();
});

jest.mock("./CountryFlag");
const CountryFlagMockFunction = CountryFlag as jest.Mock;

it("On clicking the Image Url whether the Country Flag Page will render or not",()=>{
  render(<AddRouting/>)
  let flagURL = screen.getByTestId(/flag_url/i);
  let mockCall = CountryFlagMockFunction.mockImplementation(() => (
    <div data-testid="Mock_Flag_Page">Flag Details Mock</div>
  ));
  fireEvent.click(flagURL,mockCall);
  render(
    <MemoryRouter initialEntries={["/flagImage"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId(/Mock_Flag_Page/i)).toBeInTheDocument()
})

jest.mock("./Homepage");
const HomePageMockFunction = Homepage as jest.Mock;

it("On clicking the Previous Page Button whether the component Homepage will render or not",()=>{
  render(<AddRouting/>)
  let previousPageButton = screen.getByTestId(/previous/i);
  let mockCall = HomePageMockFunction.mockImplementation(() => (
    <div data-testid="Homepage">Homepage Mock</div>
  ));
  fireEvent.click(previousPageButton,mockCall);
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId(/Homepage/i)).toBeInTheDocument()
})

jest.mock("./Weather");
const WeattherMockFunction = Weather as jest.Mock;

it("On clicking the Capital Weather Button whether the component Weather will render or not",()=>{
  render(<AddRouting/>)
  let capitalWeatherButton = screen.getByTestId(/capital_weather/i);
  let mockCall = WeattherMockFunction.mockImplementation(() => (
    <div data-testid="weather_page">Weather Mock</div>
  ));
  fireEvent.click(capitalWeatherButton,mockCall);
  render(
    <MemoryRouter initialEntries={["/weather"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId(/weather_page/i)).toBeInTheDocument()
})
