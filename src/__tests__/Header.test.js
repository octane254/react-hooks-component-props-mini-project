import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders a <header> element", () => {
  const { container } = render(<Header name="Underreacted" />);
  expect(container.querySelector("header")).toBeInTheDocument();
});

test("displays the blog name", () => {
  render(<Header name="Underreacted" />);
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
});
