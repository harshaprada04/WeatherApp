import "@testing-library/jest-dom/extend-expect";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Homepage";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <HomePage /> 
    </BrowserRouter>
  );
};

describe("Home", () => {
	it("renders", () => {
		render(<AddRouting />);
	});

	it("has button disabled", () => {
		render(<AddRouting />);
		const submitButton = screen.getByRole("button");
		expect(submitButton).toBeDisabled();
	});

	it("has button enabled on input", async () => {
		render(<AddRouting />);
			const input = screen.getByRole("textbox");
			fireEvent.change(input, { target: { value: "test" } });
     		const submitButton = screen.getByRole("button");
	    	expect(submitButton).toBeEnabled();
			const click = fireEvent.click(submitButton);
		    expect(click).toBe(true);
	});
});
