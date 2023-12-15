import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <div className="flex flex-col text-start">
        <label
          className="block mb-1 text-sm font-bold text-gray-700"
          htmlFor={props.name}
        >
          {props.label}
        </label>
        <textarea
          id={props.name}
          className="border-2 h-60 border-gray-200 rounded p-2 focus:outline-none focus:border-primary"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

TextArea.displayName = "Input";
