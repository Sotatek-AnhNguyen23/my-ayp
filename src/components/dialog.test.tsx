import Dialog from "./dialog";
import "@testing-library/jest-dom";
import { screen, render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../hooks/redux/store";

describe("Dialog", () => {
  const mockEmployee = {
    id: 1,
    name: "Patric Swatheridge",
    email: "pswatheridge0@ayp-group.com",
    isActive: true,
  };

  afterEach(() => {
    cleanup;
  });

  it("should render Dialog update", () => {
    render(
      <Provider store={store}>
        <Dialog visible={true} setVisible={() => {}} employee={mockEmployee} />
      </Provider>
    );
    expect(screen.getByTestId("updateDialog")).toBeInTheDocument();
  });

  it("should show employee data", () => {
    render(
      <Provider store={store}>
        <Dialog visible={true} setVisible={() => {}} employee={mockEmployee} />
      </Provider>
    );
    const name = screen.getByDisplayValue("Patric Swatheridge");
    expect(name).toBeInTheDocument();
  });
});
