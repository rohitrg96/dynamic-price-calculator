import { basePrices, addonPrices } from '../utils/const';
import type { PriceInputs } from '../utils/types';
import { useState } from 'react';

export const usePriceCalculator = ({ size, addons }: PriceInputs) => {
  const [quantity, setQuantity] = useState(1);
  const base = basePrices[size] || 12;
  const addonsTotal = addons.reduce((sum, a) => sum + (addonPrices[a] || 0), 0);
  const subtotal = base + addonsTotal;
  const total = subtotal * quantity;
  const discount = quantity >= 10 ? 0.1 * total : 0;
  const finalPrice = total - discount;

  return {
    base,
    addonsTotal,
    subtotal,
    total,
    discount,
    finalPrice,
    quantity,
    setQuantity,
  };
};
