import { TableCustom } from "./table";
import {} from "@testing-library/jest-dom";
import { screen, render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../hooks/redux/store";

describe("TableCustom", () => {
  const mockEmployees = [
    {
      id: 1,
      name: "Patric Swatheridge",
      email: "pswatheridge0@ayp-group.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Emlyn Simpkiss",
      email: "esimpkiss1@ayp-group.com",
      isActive: true,
    },
    {
      id: 3,
      name: "Carlos Roxburch",
      email: "croxburch2@ayp-group.com",
      isActive: true,
    },
    {
      id: 4,
      name: "Casandra Thundercliffe",
      email: "cthundercliffe3@ayp-group.com",
      isActive: true,
    },
    {
      id: 5,
      name: "Edvard Blacksland",
      email: "eblacksland4@ayp-group.com",
      isActive: false,
    },
  ];

  afterEach(() => {
    cleanup;
  });

  it("should render TableCustom component", () => {
    render(
      <Provider store={store}>
        <TableCustom employees={mockEmployees} />
      </Provider>
    );
    const table = screen.getByTestId("employeesTable");
    expect(table).toBeInTheDocument();
  });

  it("should show list of employees", () => {
    render(
      <Provider store={store}>
        <TableCustom employees={mockEmployees} />
      </Provider>
    );
    const rows = screen.getAllByTestId("employeesRow");
    expect(rows.length).toEqual(5);
  });
});
