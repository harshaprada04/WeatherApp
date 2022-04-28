import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import CountryDetails from "../components/CountryDeatails";
import Homepage from "../components/Homepage";
import Weather from "../components/Weather";
import { MemoryRouter } from "react-router";
import App from "../App";

jest.mock("../components/Homepage");
const HomePageMockFunction = Homepage as jest.Mock;

test("Should render HomePage on default route", () => {
  HomePageMockFunction.mockImplementation(() => <div>HomePageMock</div>);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/HomePageMock/i)).toBeInTheDocument();
});

jest.mock("../components/CountryDeatails");
const CountryDetailsFunction = CountryDetails as jest.Mock;

test("To check whether on countryDetails route the component CountryDetails will be render or not", () => {
  CountryDetailsFunction.mockImplementation(() => (
    <div>CountryDetailsMock</div>
  ));

  render(
    <MemoryRouter initialEntries={["/CountryDetails"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/CountryDetailsMock/i)).toBeInTheDocument();
});

jest.mock("../components/Weather");
const WeatherFunction = Weather as jest.Mock;

test("To check whether on weather route the component Weather will be render or not", () => {
    WeatherFunction.mockImplementation(() => (
    <div>WeatherMock</div>
  ));

  render(
    <MemoryRouter initialEntries={["/weather"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/WeatherMock/i)).toBeInTheDocument();
});
