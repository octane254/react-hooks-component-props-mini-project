import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders a <aside> element", () => {
  const { container } = render(<About about="About this blog" />);
  expect(container.querySelector("aside")).toBeInTheDocument();
});

test("uses default image when no prop is passed", () => {
  render(<About about="About this blog" />);
  const img = screen.getByAltText("blog logo");
  expect(img).toHaveAttribute("src", "https://via.placeholder.com/215");
});
