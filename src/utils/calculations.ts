export function calculateRentability(annualRent: number, totalCost: number): number {
  return (annualRent / totalCost) * 100;
}

export function calculateTotalCost(annualRent: number, rentability: number): number {
  return annualRent / (rentability / 100);
}

export function calculateAnnualRent(rentability: number, totalCost: number): number {
  return (rentability / 100) * totalCost;
}