import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetails from "./CountryDeatails";
import Weather from "./Weather";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <Weather />
    </BrowserRouter>
  );
};

it("Page has a previous Page Button or not", () => {
  render(<AddRouting />);
  expect(screen.getByText(/back/i)).toBeTruthy();
});

it("The Back Button has click event or not", () => {
  render(<AddRouting />);
  const button = screen.getByTestId(/btn/i);
  const click = fireEvent.click(button)
  expect(click).toBeTruthy();
});

it("Page has a previous Page Button or not", () => {
  render(<AddRouting />);
  let temperature = screen.getByTestId(/temperature/i);
  let weatherIcon = screen.getByTestId(/weather_icon/i);
  let weatherSpeed = screen.getByTestId(/wind_speed/i);
  let pecipitation = screen.getByTestId(/pecipitation/i);
  expect(temperature).toBeInTheDocument();
  expect(weatherIcon).toBeInTheDocument();
  expect(weatherSpeed).toBeInTheDocument();
  expect(pecipitation).toBeInTheDocument();
});
