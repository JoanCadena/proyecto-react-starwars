import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import InfoCardImg from "./InfoCardImg";

const testInfo = {
  img: "https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg",
  title: "test title",
  description: "this is a test description",
};
const renderComp = () => render(<InfoCardImg info={testInfo} />);

describe("When <InfoCard /> is rendered", () => {
  it("should render the component with the title, description and image", () => {
    renderComp();
    const infoCardImage = screen.getByRole("img");
    const infoCardTitle = screen.getByText(testInfo.title);
    const infoCardDesc = screen.getByText(testInfo.description);
    expect(infoCardImage).toBeInTheDocument();
    expect(infoCardTitle).toBeInTheDocument();
    expect(infoCardDesc).toBeInTheDocument();
  });
});
