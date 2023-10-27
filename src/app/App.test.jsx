import React from 'react'
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe('', () => {
  it("App render", () => {
    const { getByText } = render(<App />);

    expect(getByText("test")).toBeDefined();
  });
})