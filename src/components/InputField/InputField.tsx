import React from "react";
import "./InputField.css";

interface InputFieldProps {
  label: string;
  validation: string;
  placeholder: string;
  pattern: string;
}

export const InputField = ({
  label,
  validation,
  placeholder,
  pattern,
}: InputFieldProps) => {
  return (
    <div>
      <div className="input-field-label">{label}</div>
      <input
        className="input-field-input"
        placeholder={placeholder}
        pattern={pattern}
      />
      <div className="input-field-invalid-text">
        {validation}
      </div>
    </div>
  );
};
