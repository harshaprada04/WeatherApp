import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom"
import HomePage from "./Homepage" ;



let AddRouting = () => {
    return (
      <BrowserRouter>
        <HomePage  />
      </BrowserRouter>
    );
  };

it("Button has a name attribute or not", ()=>{
    render(<AddRouting/>)
    expect( screen.getByRole("button")).toHaveAttribute("name")
});

  
it("Button is diabled or not",   ()=>{
    render(<AddRouting />)
    expect(
         screen.getByRole("button",{
            name:/submit/i
        })
    ).toBeDisabled()
});

it("Button Enabled or not when we enter the country details", ()=>{
    render(<AddRouting />)
        let inputElement1= screen.getByPlaceholderText(/Country Name/i);
        fireEvent.change(inputElement1,{target:{value:"India"}})
    expect(
         screen.getByRole("button")
    ).toBeEnabled()
});
