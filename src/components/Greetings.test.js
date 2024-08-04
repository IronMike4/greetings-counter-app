import React from "react";
import renderer from "react-test-renderer";
import Greetings from "./Greetings";

// Test to check if the Greetings component renders correctly
test("Greetings component renders correctly", () => {
  // Render the Greetings component to a JSON object
  const tree = renderer.create(<Greetings />).toJSON();
  // Assert that the rendered output matches the previous snapshot
  expect(tree).toMatchSnapshot();
});
