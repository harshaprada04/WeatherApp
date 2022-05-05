import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import routeData from 'react-router'; 
import CountryDetailsPage from "./CountryDetailsPage";

let AddRouting = () => {
  
  return (
    <BrowserRouter>
      <CountryDetailsPage /> 
    </BrowserRouter>
  );
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      country: "yyyyy",
    },
  }),
}));

describe("", () => {
  jest.setTimeout(10000);
  
  it("erorr", async () => {
     render(<AddRouting />);
   await act(async () => {
    await new Promise((r) => setTimeout(r, 5000)); 
    });
    const post = screen.getByTestId("error");
    expect(post.innerHTML).toBe("Please Enter a proper country name")
  });
});
