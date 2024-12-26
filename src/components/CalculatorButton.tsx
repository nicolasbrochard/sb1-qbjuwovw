import React from 'react';

interface CalculatorButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function CalculatorButton({ selected, onClick, children }: CalculatorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-3 sm:p-4 rounded-lg border-2 text-sm sm:text-base ${
        selected
          ? 'border-oryon-turquoise bg-oryon-turquoise/10 text-oryon-navy'
          : 'border-gray-200 hover:border-oryon-turquoise/50'
      }`}
    >
      {children}
    </button>
  );
}