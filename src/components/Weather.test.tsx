import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetails from "./CountryDeatails";
import Weather from "./Weather";
import { MemoryRouter } from "react-router";
import App from "../App";
import { getWeatherDetailInfo } from "../actions/weather";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <Weather />
    </BrowserRouter>
  );
};

it("Page has a previous Page Button or not", () => {
  render(<AddRouting />);
  expect(screen.getByText(/previous page/i)).toBeTruthy();
});

jest.mock("../components/CountryDeatails");
const CountryDetailsMockFunction = CountryDetails as jest.Mock;

test("Checking onClick on the submit button whether the Country Details page will render or not", () => {
  render(<AddRouting />);
  let button = screen.getByTestId("btn");
  let mockCall = CountryDetailsMockFunction.mockImplementation(() => (
    <div data-testid="Country-Page">Country Details Mock</div>
  ));
  fireEvent.click(button, mockCall);
  render(
    <MemoryRouter initialEntries={["/countryDetails"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId(/Country-Page/i)).toBeInTheDocument();
});

it("To check whether the weather feteched data from api is same or not", async function () {
  const fetechCountry = await fetch(
    "http://api.weatherstack.com/current?access_key=70f1dc709374faf6feae6a9b27b4f350&query=New%20Delhicd "
  );
  const actualResult = await fetechCountry.json();
  const result = await getWeatherDetailInfo("New Delhi");
  expect(result).toEqual(actualResult);
});
