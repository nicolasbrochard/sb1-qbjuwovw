import React from 'react';

interface CalculatorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  unit: string;
}

export function CalculatorInput({ label, value, onChange, placeholder, unit }: CalculatorInputProps) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium text-oryon-navy mb-1">
        {label} ({unit})
      </label>
      <input
        type="number"
        step="0.01"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oryon-turquoise focus:border-oryon-turquoise text-sm sm:text-base"
        placeholder={placeholder}
      />
    </div>
  );
}