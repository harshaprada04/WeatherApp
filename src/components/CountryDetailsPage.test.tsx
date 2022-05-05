import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetailsPage from "./CountryDetailsPage";
import { act } from "react-dom/test-utils";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <CountryDetailsPage/> 
    </BrowserRouter>
  );
};

it("Page has capital waether button and button has click event",()=>{
  render(<AddRouting/>)
  let button = screen.getByRole("button",{name:/back/i});
    expect(button).toBeTruthy();
    let click = fireEvent.click(button);
    expect(click).toBe(true);
})

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      country: "India",
    },
  }),
}));

describe("", () => {
  jest.setTimeout(10000);
  
  it("Feteches the country data on loading", async () => {
     render(<AddRouting />);
   await act(async () => {
    await new Promise((r) => setTimeout(r, 5000)); 
    });
    const post = screen.getByTestId("country-0");
    expect(post).toBeInTheDocument()
    let button = screen.getByRole("button",{name:/capital/i});
    expect(button).toBeTruthy();
    let click = fireEvent.click(button);
    expect(click).toBe(true);
  });
});
