import React, { useState } from 'react';
import { CalculatorInput } from './components/CalculatorInput';
import { CalculatorButton } from './components/CalculatorButton';
import { Logo } from './components/Logo';
import { formatCurrency, formatPercentage } from './utils/formatters';
import { calculateRentability, calculateTotalCost, calculateAnnualRent } from './utils/calculations';

type CalculationType = 'rentability' | 'totalCost' | 'annualRent';

function App() {
  const [calculationType, setCalculationType] = useState<CalculationType>('rentability');
  const [annualRent, setAnnualRent] = useState<string>('');
  const [totalCost, setTotalCost] = useState<string>('');
  const [rentability, setRentability] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculate = () => {
    try {
      switch (calculationType) {
        case 'rentability':
          if (annualRent && totalCost) {
            const rent = parseFloat(annualRent);
            const cost = parseFloat(totalCost);
            const rentabilityValue = calculateRentability(rent, cost);
            setResult(`Taux de rentabilité : ${formatPercentage(rentabilityValue)}`);
          }
          break;
        case 'totalCost':
          if (annualRent && rentability) {
            const rent = parseFloat(annualRent);
            const rate = parseFloat(rentability);
            const costValue = calculateTotalCost(rent, rate);
            setResult(`Coût de revient total : ${formatCurrency(costValue)}`);
          }
          break;
        case 'annualRent':
          if (rentability && totalCost) {
            const rate = parseFloat(rentability);
            const cost = parseFloat(totalCost);
            const rentValue = calculateAnnualRent(rate, cost);
            setResult(`Loyer annuel : ${formatCurrency(rentValue)}`);
          }
          break;
      }
    } catch (error) {
      setResult('Erreur de calcul. Vérifiez vos entrées.');
    }
  };

  const reset = () => {
    setAnnualRent('');
    setTotalCost('');
    setRentability('');
    setResult('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-oryon-turquoise/10 px-4 py-6 sm:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-32">
            <Logo />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-oryon-navy">Calculette HPU</h1>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CalculatorButton
              selected={calculationType === 'rentability'}
              onClick={() => {
                setCalculationType('rentability');
                reset();
              }}
            >
              Taux de rentabilité
            </CalculatorButton>
            <CalculatorButton
              selected={calculationType === 'totalCost'}
              onClick={() => {
                setCalculationType('totalCost');
                reset();
              }}
            >
              Coût de revient total
            </CalculatorButton>
            <CalculatorButton
              selected={calculationType === 'annualRent'}
              onClick={() => {
                setCalculationType('annualRent');
                reset();
              }}
            >
              Loyer annuel
            </CalculatorButton>
          </div>

          <div className="space-y-4">
            {calculationType !== 'annualRent' && (
              <CalculatorInput
                label="Loyer annuel"
                value={annualRent}
                onChange={setAnnualRent}
                placeholder="Entrez le loyer annuel"
                unit="€"
              />
            )}

            {calculationType !== 'totalCost' && (
              <CalculatorInput
                label="Coût de revient total"
                value={totalCost}
                onChange={setTotalCost}
                placeholder="Entrez le coût de revient total"
                unit="€"
              />
            )}

            {calculationType !== 'rentability' && (
              <CalculatorInput
                label="Taux de rentabilité"
                value={rentability}
                onChange={setRentability}
                placeholder="Entrez le taux de rentabilité"
                unit="%"
              />
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculate}
              className="flex-1 bg-oryon-navy text-white py-2.5 sm:py-3 px-6 rounded-lg hover:bg-oryon-navy/90 transition-colors text-sm sm:text-base"
            >
              Calculer
            </button>
            <button
              onClick={reset}
              className="px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              Réinitialiser
            </button>
          </div>

          {result && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-sm sm:text-lg font-semibold text-oryon-navy mb-2">Résultat :</h2>
              <p className="text-lg sm:text-xl text-oryon-turquoise">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;