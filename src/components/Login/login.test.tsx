import Login from "./login";
import { test } from "@jest/globals";
import { screen, render } from '@testing-library/react';

test("is login component renders", () =>{
    render(<Login buttonText="log in"></Login>)
    
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    // screen.debug();
});








