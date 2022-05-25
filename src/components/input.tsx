interface Props {
  title: string;
  placeholder?: string;
  value?: string;
}
export const Input = (props: Props) => {
  const { title, placeholder, value } = props;
  return (
    <div>
      <label
        htmlFor=""
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
      <input
        name=""
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
};
