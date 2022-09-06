import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";

const testInfo = {
  img: "https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg",
  title: "test title",
  description: "this is a test description",
};
const renderComp = () => render(<InfoCard info={testInfo} />);

describe("When <InfoCard /> is rendered", () => {
  it("should render the component with the title, description and image", () => {
    renderComp();
    const infoCardImg = screen.getByRole("img");
    const infoCardTitle = screen.getByText(testInfo.title);
    const infoCardDesc = screen.getByText(testInfo.description);
    expect(infoCardImg).toBeInTheDocument();
    expect(infoCardTitle).toBeInTheDocument();
    expect(infoCardDesc).toBeInTheDocument();
  });
});
