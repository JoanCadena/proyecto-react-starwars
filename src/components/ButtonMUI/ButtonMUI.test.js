import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import ButtonMUI from "./ButtonMUI";

describe("<ButtonMUI />", () => {
  let component;
  beforeEach(() => {
    component = render(<ButtonMUI />);
  });

  test("render the component", () => {
    component.getByText(/Presioname!/i);
  });

  test("component change their bg-color", () => {
    const button = component.getByText(/Presioname!/i);

    expect(button).toHaveClass("bg-primary");
    fireEvent.click(button);
    expect(button).toHaveClass("bg-danger");
  });

  test("component change their text by mouse over or not", () => {
    const button = component.getByText(/Presioname!/i);
  
    expect(button).toHaveTextContent("Presioname!");
    fireEvent.mouseOver(button);
    expect(button).toHaveTextContent("Hazlo Rapido!!!");
    fireEvent.mouseOut(button);
    expect(button).toHaveTextContent("Presioname!");
  });
});
