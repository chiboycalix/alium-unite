import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  register?: UseFormRegister<any>;
  error?: FieldError;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type, register, error, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...(register ? register(id) : {})}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;