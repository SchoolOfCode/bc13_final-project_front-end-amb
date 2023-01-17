
import { test } from "@jest/globals";
import { screen, render } from '@testing-library/react';
import CreateTrip from "./createTrip";

test("is create trip h1 rendering", () =>{
    render(<CreateTrip />)
    
    const h1 = screen.getByText("Create Trip");
    expect(h1).toBeInTheDocument();

    // screen.debug();
});