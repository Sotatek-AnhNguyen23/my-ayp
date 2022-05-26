import cx from "classnames";
import { useEffect, useState } from "react";
import { homeActions } from "../handles/home/utils/data/homeActions";
import {
  UpdateEmployeeInput,
  UpdateEmpPayload
} from "../handles/home/utils/home.types";
import { useAppDispatch } from "../hooks/redux/hooks";
import { Employee } from "../utils/constance";
import Input from "./input";
import Toggle from "./toggle";

interface Props {
  visible: boolean;
  employee?: Employee;
  setVisible: (isVisible: boolean) => void;
  onSave?: () => void;
}

const Dialog = (props: Props) => {
  const dispatch = useAppDispatch();

  const { setVisible, visible, employee } = props;
  const [name, setName] = useState(employee?.name || "");
  const [email, setEmail] = useState(employee?.email || "");
  const [isActive, setIsActive] = useState(employee?.isActive);

  useEffect(() => {
    if (!employee) return;
    setEmail(employee.email);
    setName(employee.name);
    setIsActive(employee.isActive);
  }, [employee]);

  const onCallbackSuccess = () => {
    setVisible(false);
  };

  const onSubmit = (params: UpdateEmployeeInput) => {
    const payload: UpdateEmpPayload = {
      params,
      eId: employee?.id || 0,
      onCallbackSuccess,
    };

    dispatch({
      type: homeActions.UPDATE_EMPLOYEE,
      payload,
    });
  };

  return (
    <div
      className={cx(
        "absolute bg-slate-300 bg-opacity-90 w-screen h-screen top-0 left-0 shadow-black p-4",
        { ["hidden"]: !visible }
      )}
    >
      <div className="grid place-items-center w-full h-full bg-important">
        <div className="bg-white opacity-100 rounded  w-96 p-4">
          <form>
            <div className="mb-3">
              <Input title="Name" name="name" value={name} onChange={setName} />
              <Input
                title="Email"
                name="email"
                value={email}
                onChange={setEmail}
              />
              <Toggle
                label="Is Active"
                name="isActive"
                value={isActive || false}
                setIsActive={setIsActive}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="h-11 w-14 rounded bg-red-300 mr-4"
                onClick={() => setVisible(false)}
                type="button"
              >
                Cancel
              </button>
              <button
                type="button"
                className="h-11 w-14 rounded bg-blue-300 "
                onClick={() => {
                  const params: UpdateEmployeeInput = {
                    name,
                    email,
                    isActive,
                  };
                  onSubmit(params);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dialog;
