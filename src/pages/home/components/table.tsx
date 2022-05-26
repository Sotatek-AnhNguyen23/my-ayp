import cx from "classnames";
import { useState } from "react";
import Dialog from "../../../components/dialog";
import { Employee } from "../../../utils/constance";
interface Props {
  employees: Employee[];
}

export const TableCustom = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [updateEmployee, setUpdateEmployee] = useState<Employee>();
  const { employees } = props;

  const renderHeader = (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          ID
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Active
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );

  return (
    <div className="">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          {renderHeader}
          <tbody>
            {employees.map((e) => (
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {e.id}
                </th>
                <td className="px-6 py-4 "> {e.name}</td>
                <td className="px-6 py-4"> {e.email}</td>
                <td
                  className={cx(
                    "px-6 py-4",
                    e.isActive ? "text-blue-500" : "text-red-400"
                  )}
                >
                  {e.isActive ? "True" : "False"}
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => {
                      setUpdateEmployee(e);
                      setVisible(true);
                    }}
                    className={cx("font-medium", {
                      ["text-blue-400"]: e.isActive,
                    })}
                    disabled={!e.isActive}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Dialog
        setVisible={setVisible}
        visible={visible}
        employee={updateEmployee}
      />
    </div>
  );
};
