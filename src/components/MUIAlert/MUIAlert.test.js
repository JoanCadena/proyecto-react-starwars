import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import MUIAlert from "./MUIAlert";

const renderComp = () => render(
    <MUIAlert severity="success" mensaje="Test Success"/>
);

describe("When <MUIAlert /> is rendered", () => {
  it("should render the component with the passed message", () => {
    renderComp();
    const alert = screen.getByText(/Test Success/i);
    expect(alert).toBeInTheDocument();
  });

  it('should show the alert with the passed severity', ()=> {
    renderComp();
    const alert = screen.getByTestId('AlertComp');
    // screen.debug()
    expect(alert).toHaveClass('MuiAlert-standardSuccess')

  })
});
