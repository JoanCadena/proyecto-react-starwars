import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import MUICarousel from "./MUICarousel";

const item = [
  {
    image:
      "https://lumiere-a.akamaihd.net/v1/images/62fcf548bde4cd00014e8114-image_0f021e09.jpeg?region=0%2C0%2C1536%2C864",
    name: "Darth Vader",
  },
];

const renderComp = render(<MUICarousel items={item} />, {
  wrapper: MemoryRouter,
});

describe("When <MUICarousel /> is rendered", () => {
  it("should render the component and work correctly", () => {
    renderComp;
    const nextButton = screen.getByLabelText("Next");
    const prevButton = screen.getByLabelText("Previous");
    const carImage = screen.getAllByTestId("carImg")[0];
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(carImage).toHaveStyle(
      "background-image: url(https://lumiere-a.akamaihd.net/v1/images/62fcf548bde4cd00014e8114-image_0f021e09.jpeg?region=0%2C0%2C1536%2C864)"
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/blog/darth_vader");
  });
});
