import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetailsPage from "./CountryDetailsPage";

let AddRouting = () => {
  const baseProps = {
    capital: "Delhi",
    population: "12",
    latlng: [70, 60],
    flag: {
        png: "www.ww",
    }
  };
  return (
    <BrowserRouter>
      <CountryDetailsPage {...baseProps}/>
    </BrowserRouter>
  );
};

it("Page has a previous Page Button or not", () => {
  render(<AddRouting />);
  expect(screen.getByText(/previous page/i)).toBeTruthy();
});
