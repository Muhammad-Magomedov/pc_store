import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

it("App render", () => {
  const { getByText } = render(<App />);

  expect(getByText("test")).toBeDefined();
});
