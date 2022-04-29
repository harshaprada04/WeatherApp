import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CountryDetails from "./CountryDeatails";
import { act } from "react-dom/test-utils";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <CountryDetails />
    </BrowserRouter>
  );
};

it("contains div", async () => {
  render(<AddRouting />);
  const tableHead = await screen.getByTestId("map_div");
  await expect(tableHead).toBeInTheDocument();
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      country: "india",
    },
  }),
}));

describe("", () => {
  jest.setTimeout(10000);

  it("contains first post on loading", async () => {
     render(<AddRouting />);
   await act(async () => {
  
    await new Promise((r) => setTimeout(r, 5000));
       waitFor(() => {
        const post = screen.getByTestId("post-0");
        expect(post).toBeInTheDocument()
      })
    }); 
  });
});
