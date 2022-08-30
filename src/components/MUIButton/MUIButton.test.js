import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect'
import MUIButton from "./MUIButton";

const btnClick = jest.fn()
const renderComp = () => render(
    <MUIButton btnContent='btnTest' btnColor='primary' onClick={btnClick}/>
);

describe("When <MUIButton /> is rendered", () => {
  it("should render the component with passed text", () => {
    renderComp();
    const button = screen.getByText(/btnTest/i);
    expect(button).toBeInTheDocument();
  });

  it("should has the passed bg-color", () => {
    renderComp();
    const button = screen.getByText(/btnTest/i);
    expect(button).toHaveClass("bg-primary");
  });

  it("should execute the passed onClick event", () => {
    renderComp();
    const button = screen.getByText(/btnTest/i);

    userEvent.click(button)
    expect(btnClick).toBeCalledTimes(1)
  });
});
