import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'
import store from "../../redux/store";
import { Provider } from "react-redux";
import ButtonMUI from "./ButtonMUI";

const renderComp = () => render(
  <Provider store={store}>
    <ButtonMUI />
  </Provider>
);

describe("When <ButtonMUI /> is rendered", () => {
  // f for focus
  it("should render the component", () => {
    renderComp();
    const button = screen.getByText(/Presioname!/i);
    expect(button).toBeInTheDocument();
  });

  it("should change their bg-color when the user click the button", () => {
    renderComp();
    const button = screen.getByText(/Presioname!/i);

    expect(button).toHaveClass("bg-primary");
    userEvent.click(button);
    expect(button).toHaveClass("bg-danger");
  });

  it("should change their text if the user mouse over or mouse leave", () => {
    renderComp();
    const button = screen.getByText(/Presioname!/i);

    userEvent.hover(button);
    expect(button).toHaveTextContent("Hazlo Rapido!!!");
    userEvent.unhover(button);
    expect(button).toHaveTextContent("Presioname!");
  });
});
