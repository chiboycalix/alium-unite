import React from 'react';

interface SortFieldProps {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (field: string) => void;
}

const SortField: React.FC<SortFieldProps> = ({ label, id, options, value, onChange }) => {
  return (
    <div className="mb-4 sm:mb-0 sm:ml-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SortField;