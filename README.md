# Greetings Counter App

This project is a simple counter application that features basic increment and decrement functionality. It includes a snapshot test for the Greetings component and unit tests for the "Increment" and "Decrement" buttons. The app is built using React and utilizes Jest for testing.

## Features

- Increment and Decrement: Users can increase or decrease the count with corresponding buttons.
- Snapshot Testing: Ensures the Greetings component renders correctly.
- Unit Testing: Validates that the increment and decrement functionalities work as expected.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/greetings-counter-app.git
   cd greetings-counter-app

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Start the development server:**

   ```bash
   npm start

   ```

4. **Open the project in your browser:**
   Navigate to http://localhost:3000 to view the Banking App.

## Technologies Used

- React: Frontend library for building the user interface.
- Jest: Testing framework for running snapshot and unit tests.
- React Testing Library: For testing React components in a user-centric way.
- Bootstrap: CSS framework for styling and layout.

## Tests

### Snapshot Test

A snapshot test is created for the Greetings component to ensure it renders correctly.

1. Component: Greetings
2. Test File: Greetings.test.js
3. Description: The test creates a snapshot of the Greetings component and compares it to the previous snapshot to ensure no unintended changes have occurred.

### Unit Test for "Increment" and "Decrement"

Unit tests are created for the "Increment" and "Decrement" buttons in the App component to ensure the count increases and decreases correctly.

1. Component: App
2. Test File: Counter.test.js
3. Description: The tests check if the "Increment" and "Decrement" buttons modify the count as expected.

### Test Results

The results of these tests are saved in the screenshots folder.

- Greetings-test.png
- Counter-test.png
- App-test.png
- All-tests.png

## Contact

[Michael Mahachi](mikhach@gmail.com)

## References

HyperionDev React - Testing a React App Task (PDF)
