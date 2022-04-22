import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { MemoryRouter } from "react-router";
import CountryFlagPage from "./CountryFlag";
import CountryDetails from "../components/CountryDeatails";

let AddRouting = () => {
    return (
      <BrowserRouter>
        <CountryFlagPage/>
      </BrowserRouter>
    );
  };

jest.mock("../components/CountryDeatails");
const CountryDetailsMockFunction = CountryDetails as jest.Mock;

test("Checking onClick on the previous page button whether the Country Details page will renderb or not", () => {
  render(<AddRouting/>)
  let button = screen.getByTestId("flag_previous_page_btn");
  let mockCall = CountryDetailsMockFunction.mockImplementation(() => (
    <div data-testid="Country-Page">Country Details Mock</div>
  ));
  fireEvent.click(button,mockCall)
  render(
    <MemoryRouter initialEntries={["/countryDetails"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId(/Country-Page/i)).toBeInTheDocument();
});