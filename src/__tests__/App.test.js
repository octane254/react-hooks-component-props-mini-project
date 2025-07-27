import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import blogData from "../data/blog"; // Ensure this imports correctly

test("renders the correct child components", () => {
  render(<App />);
  
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("complementary")).toBeInTheDocument();
  expect(screen.getByRole("main")).toBeInTheDocument(); // This should now work
});
