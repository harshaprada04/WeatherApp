import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

let AddRouting =(()=>{
    return(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
})

it("renders",()=>{
    render(<AddRouting/>)
})

