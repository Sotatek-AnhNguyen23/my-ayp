import Home from "./index.page";
import { cleanup, render, screen } from "@testing-library/react";
import { store } from "../../hooks/redux/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("Home", () => {
  afterEach(() => {
    cleanup;
  });

  it("running test", () => {
    // expect(true).toEqual(true);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByTestId("homeComponent")).toBeInTheDocument();
  });
});
