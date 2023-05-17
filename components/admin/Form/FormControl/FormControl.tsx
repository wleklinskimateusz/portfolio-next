import React, { FC, InputHTMLAttributes, PropsWithChildren } from "react";

type FormControlProps = PropsWithChildren<{
  label?: string;
  error?: string;
}>;

export const FormControl: FC<FormControlProps> = ({
  label,
  error,
  children,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      {children}
      {error && (
        <label className="label">
          <span className="label-text-alt">{error}</span>
        </label>
      )}
    </div>
  );
};
