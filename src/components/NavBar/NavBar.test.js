import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import App from "../../App";

const renderComp = () => render(<App />, { wrapper: BrowserRouter });

describe("When <NavBar /> is rendered", () => {
  it("should render the component", () => {
    renderComp();
    const NavLink = screen.getByText(/characters/i);
    expect(NavLink).toBeInTheDocument();
  });

  it("should change the class of the NavLink to active by clicking it", () => {
    renderComp();
    const NavLink = screen.getByText(/log in/i);
    expect(NavLink).not.toHaveClass("active");
    userEvent.click(NavLink);
    expect(NavLink).toHaveClass("active");
  });

  it("should change the page by clicking NavLink", () => {
    renderComp();
    const NavLink = screen.getByText(/home/i);
    userEvent.click(NavLink);
    expect(screen.getByText(/you are home/i)).toBeInTheDocument();
  });
});
