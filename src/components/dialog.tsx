import { useState } from "react";
import { Input } from "./input";
import cx from "classnames";
export const Dialog = (props: any) => {
  const { setVisible, visible } = props;
  console.log(visible);
  return (
    <div
      className={cx(
        "absolute bg-slate-900 w-screen h-screen top-0 left-0 opacity-90 shadow-black",
        { ["hidden"]: !visible }
      )}
    >
      <div className="grid place-items-center w-full h-full">
        <div className="bg-white rounded h-80 w-72 p-2">
          {/* <div className="py-2 text-orange-500 w-full flex justify-end">
            <div>x</div>
            <div>y</div>
          </div> */}
          <div className="">
            <Input title="Email" />
          </div>
          <button onClick={() => setVisible(false)}>butt</button>
        </div>
      </div>
    </div>
  );
};
