import React, { forwardRef } from "react";

type TextInputProps = {};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        className="input-bordered input"
        type="text"
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";
