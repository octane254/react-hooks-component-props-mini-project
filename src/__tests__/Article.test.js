import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders an <article> element", () => {
  render(<Article id={1} title="Test Title" preview="Test preview" minutes={5} />);
  expect(screen.getByRole("article")).toBeInTheDocument();
});

test("displays default date when none is passed", () => {
  render(<Article id={1} title="Test Title" preview="Test preview" minutes={5} />);
  expect(screen.getByText("January 1, 1970")).toBeInTheDocument();
});
