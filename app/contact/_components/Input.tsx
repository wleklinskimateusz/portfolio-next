import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="flex flex-col text-start">
      <label
        className="block mb-1 text-sm font-bold text-gray-700"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        id={props.name}
        className="border-2 border-gray-200 rounded p-2 focus:outline-none focus:border-primary"
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";
