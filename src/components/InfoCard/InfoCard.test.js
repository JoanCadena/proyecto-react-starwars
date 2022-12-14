import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import InfoCard from "./InfoCard";

const testInfo = {
  title: "test title",
  description: "this is a test description",
};
const renderComp = () => render(<InfoCard info={testInfo} />);

describe("When <InfoCard /> is rendered", () => {
  it("should render the component with the title, description and image", () => {
    renderComp();
    const infoCardTitle = screen.getByText(testInfo.title);
    const infoCardDesc = screen.getByText(testInfo.description);
    expect(infoCardTitle).toBeInTheDocument();
    expect(infoCardDesc).toBeInTheDocument();
  });
});
