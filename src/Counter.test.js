/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

// Test to ensure that the count increments correctly
test("increments the count", () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Find the "Increment" button
  const incrementButton = getByText("Increment");

  // Simulate a click event on the "Increment" button
  fireEvent.click(incrementButton);

  // Check if the count has been incremented to 1
  expect(getByText("Count: 1")).toBeInTheDocument();
});

// Test to ensure that the count decrements correctly
test("decrements the count", () => {
  // Render the App component
  const { getByText } = render(<App />);

  // Find the "Decrement" button
  const decrementButton = getByText("Decrement");

  // Simulate a click event on the "Decrement" button
  fireEvent.click(decrementButton);

  // Check if the count has been decremented to -1
  expect(getByText("Count: -1")).toBeInTheDocument();
});
