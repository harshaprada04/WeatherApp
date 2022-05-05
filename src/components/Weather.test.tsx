import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Weather from "./Weather";
import { act } from "react-dom/test-utils";

let AddRouting = () => {
  return (
    <MemoryRouter initialEntries={["/weather?capital=New Delhi"]}>
      <Weather />
      </MemoryRouter>
  );
};

it("The back button has click event or not", () => {
  render(<AddRouting />);
  const button = screen.getByText(/back/i);
  const click = fireEvent.click(button)
  expect(click).toBeTruthy();
});

jest.setTimeout(10000)
it("feteches the post",async()=>{
  render(<AddRouting/>)
  await act(async()=>{
    await new Promise((r)=>setTimeout(r,2000))
  })
  let post = screen.getByTestId("post-0");
  expect(post).toBeInTheDocument()
})