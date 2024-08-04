import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

// This test ensures that the App component renders correctly
test("App renders correctly", () => {
  // Create a snapshot of the App component
  const tree = renderer.create(<App />).toJSON();

  // Compare the snapshot with a previously stored reference snapshot
  expect(tree).toMatchSnapshot();
});
