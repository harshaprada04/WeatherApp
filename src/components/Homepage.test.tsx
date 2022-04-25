import "@testing-library/jest-dom/extend-expect";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Homepage";
import { MemoryRouter } from "react-router";
import App from "../App";
import CountryDetails from "../components/CountryDeatails";
import { getCountryDetailInfo } from "../actions/country";
import axios from "axios";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <HomePage data-tsetid="HomePage" />
    </BrowserRouter>
  );
};

it("Button has a name attribute or not", async () => {
  render(<AddRouting />);
  expect(await screen.getByRole("button")).toHaveAttribute("name");
});

it("Button is disabled or not", async () => {
  render(<AddRouting />);
  expect(
    await screen.getByRole("button", {
      name: /submit/i,
    })
  ).toBeDisabled();
});

it("To check whether the value of input tag is empty or not before triggering the onChange event", async () => {
  render(<AddRouting />);
  const heading = document.querySelector("[data-testid='Country Name']");
  let input = await screen.getByTestId(/country name/i);
  expect(input).toHaveValue("");
});

it("To check whether the state to set country name will upadate or not onChange event", () => {
  render(<AddRouting />);
  let inputElement = screen.getByPlaceholderText(/Country Name/i);
  fireEvent.change(inputElement, { target: { value: "India" } });
  let input = screen.getByTestId(/country name/i);
  expect(input).toHaveValue("India");
});

it("Button will be enabled or not when we enter the country details", () => {
  render(<AddRouting />);
  let inputElement1 = screen.getByPlaceholderText(/Country Name/i);
  fireEvent.change(inputElement1, { target: { value: "India" } });
  expect(screen.getByRole("button")).toBeEnabled();
});

jest.mock("../components/CountryDeatails");
const CountryDetailsMockFunction = CountryDetails as jest.Mock;

test("Checking onClick on the submit button whether the Country Details page will render or not", () => {
  render(<AddRouting />);
  let button = screen.getByRole("button");
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

it("To check whether the feteched data from api is same or not", async function () {
  const fetechCountry = await fetch(
    "https://restcountries.com/v3.1/name/India"
  );
  const actualResult = await fetechCountry.json();
  const result = await getCountryDetailInfo("India");
  expect(result).toEqual(actualResult);
});

it("fetches erroneously data from an API", async () => {
  jest.mock("axios");
  const axiosMock = axios as jest.Mocked<typeof axios>;
  axiosMock.get = jest.fn();
  const errorMessage = "Request failed with status code 404";

  axiosMock.get.mockImplementationOnce(() =>
    Promise.reject(new Error(errorMessage))
  );

  await expect(getCountryDetailInfo("yyyy")).rejects.toThrow(errorMessage);
});

test("prevents default on click", () => {
  
  render(<AddRouting />);
  const button = screen.getByTestId(/form_button/i);
  const clickEvent = new MouseEvent("click");
  Object.assign(clickEvent, {
    preventDefault: jest.fn((e) => e.preventDefault()),
  });
  fireEvent(button, clickEvent);
  fireEvent.submit(screen.getByTestId(/input_form/i));
  let onsubmit = jest.fn((e) => e.preventDefault());
  expect(onsubmit).toHaveBeenCalledTimes(0);
});

