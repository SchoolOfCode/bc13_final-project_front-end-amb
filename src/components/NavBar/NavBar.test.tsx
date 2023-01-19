import {fireEvent, getByTestId, getByText, render, screen } from '@testing-library/react' ;
import Navbar from './NavBar';
import AuthButtons from "../AuthButtons/AuthButtons";
import logo from "../../images/Logo.png";
test('tests NavBar', () => {
  const props = {pageSelect:jest.fn()}
    render(<Navbar pageSelect ={props.pageSelect}/>);
    const dashboardLink = screen.getByText("dashboard");
    expect(dashboardLink).toHaveTextContent("dashboard");
    const Logo = screen.getByAltText("camels walking off into distance");
    expect(Logo).toHaveAttribute("src","Logo.png")
    const loginLink = screen.getByText("log in");
    expect(loginLink).toHaveTextContent("log in");
  const titleElement = screen.getByText("TRAVEL HERD")
  expect(titleElement).toBeInTheDocument();
  fireEvent.click(dashboardLink);
    expect(props.pageSelect).toHaveBeenCalledWith("dashboard");
});
it('renders the AuthButtons component',() =>{
    render(<AuthButtons/>);
    const authButton = screen.getByText("log in");
    expect(authButton).toBeInTheDocument();
}
);