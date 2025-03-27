const Input = ({ className, ...props }) => (
  <input
    className={`border w-full border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export const DateInput = ({ className, ...props }) => (
  <input
    className={`w-48 text-lg border border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export const InputCheck = ({ className, ...props }) => (
  <input
    className={`border border-gray-300 bg-gray-50 rounded-md px-4 py-3 w-fit focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export default Input;
