import React from 'react';
import { addonPrices } from '../utils/const';
import type { PricingCardProps } from '../utils/types';
import { usePriceCalculator } from '../hooks/usePriceCalculator';

const PricingCard: React.FC<PricingCardProps> = ({ size, color, addons }) => {
  const { base, subtotal, discount, finalPrice, quantity, setQuantity } = usePriceCalculator({
    size,
    addons,
  });

  return (
    <div className="p-4 border-2 border-cyan-600 rounded-xl shadow-sm bg-cyan-100">
      <h2 className="text-lg font-semibold mb-4">Price Breakdown</h2>

      <ul className="text-sm mb-4 p-2">
        <li key="base">
          Base Price ({size}): ${base.toFixed(2)}
        </li>
        <li key="color" className="mt-4">
          Color: {color}
        </li>
        {addons.map((a) => (
          <li key={a} className="mt-4">
            {a.charAt(0).toUpperCase() + a.slice(1)}: ${addonPrices[a].toFixed(2)}
          </li>
        ))}
        <li key="subtotal" className="mt-4">
          Subtotal (1 item): ${subtotal.toFixed(2)}
        </li>
        <li key="total" className="mt-4">
          Quantity:
          <input
            type="number"
            min={1}
            className="ml-2 border px-2 py-1 rounded w-20"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </li>
        {discount > 0 && <li className="text-cyan-600">Bulk Discount: -${discount.toFixed(2)}</li>}
        <li className="font-bold mt-4">Total: ${finalPrice.toFixed(2)}</li>
      </ul>

      <div className="mt-6">
        <h3 className="font-semibold text-sm mb-2">Price Trend</h3>
      </div>
    </div>
  );
};

export default PricingCard;
