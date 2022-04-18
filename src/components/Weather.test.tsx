import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
  expect(screen.getByText(/previous page/i)).toBeTruthy();
});
