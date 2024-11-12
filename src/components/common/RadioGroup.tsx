import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface RadioGroupProps {
  label: string;
  name: string;
  options: string[];
  register: UseFormRegister<any>;
  error?: FieldError;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, register, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center space-x-4">
        {options.map(option => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              value={option}
              {...register(name)}
              className="form-radio h-4 w-4 text-primary-600"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
};

export default RadioGroup;