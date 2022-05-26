interface Props {
  title: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (value: any) => void;
}

const Input = (props: Props) => {
  const { title, placeholder, value, name } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {title}
      </label>
      <input
        id={name}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2"
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={(e: any) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
