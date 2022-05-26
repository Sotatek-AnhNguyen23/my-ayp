interface Props {
  label: string;
  name: string;
  value: boolean;
  setIsActive: (active: boolean) => void;
}
const Toggle = (props: Props) => {
  return (
    <label
      htmlFor={props.name}
      className="flex items-center cursor-pointer mt-2"
    >
      <div className="mr-3 text-gray-700 font-medium">{props.label}</div>

      <div className="relative">
        <input
          id={props.name}
          name={props.name}
          type="checkbox"
          className="sr-only"
          onChange={() => {
            props.setIsActive(!props.value);
          }}
          checked={props.value}
        />
        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
      </div>
    </label>
  );
};

export default Toggle;
