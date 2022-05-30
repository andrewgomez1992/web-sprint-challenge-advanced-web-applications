// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner'
import { render } from '@testing-library/react'
import React from 'react'

let spinnerOn = true


test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', () => {
  render(<Spinner on={spinnerOn} />)
});

test("Spinner has no errors when true", async () => {
  render(<Spinner on={spinnerOn} />);
});

test("Spinner has no errors when false", async () => {
  spinnerOn = false;
  render(<Spinner on={spinnerOn} />);
});




