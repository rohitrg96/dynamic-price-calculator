import React, { useState } from "react";
import { basePrices, addonPrices } from "../utils/const";
import type { PricingCardProps } from "../utils/types";

const PricingCard: React.FC<PricingCardProps> = ({ size, color, addons }) => {
  const [quantity, setQuantity] = useState(1);
  const base = basePrices[size] || 12;
  const addonsTotal = addons.reduce((sum, a) => sum + (addonPrices[a] || 0), 0);
  const subtotal = base + addonsTotal;
  const total = subtotal * quantity;
  const discount = quantity >= 10 ? 0.1 * total : 0;
  const finalPrice = total - discount;

  return (
    <div className="p-4 border-2 border-cyan-600 rounded-xl shadow-sm bg-cyan-100">
      <h2 className="text-lg font-semibold mb-4">Price Breakdown</h2>

      <ul className="text-sm mb-4 p-2">
        <li>
          Base Price ({size}): ${base.toFixed(2)}
        </li>
        <li className="mt-4">Color: {color}</li>
        {addons.map((a) => (
          <>
            <li key={a} className="mt-4">
              {a.charAt(0).toUpperCase() + a.slice(1)}: $
              {addonPrices[a].toFixed(2)}
            </li>
          </>
        ))}
        <li className="mt-4">Subtotal (1 item): ${subtotal.toFixed(2)}</li>
        <li className="mt-4">
          Quantity:
          <input
            type="number"
            min={1}
            className="ml-2 border px-2 py-1 rounded w-20"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </li>
        {discount > 0 && (
          <li className="text-cyan-600">
            Bulk Discount: -${discount.toFixed(2)}
          </li>
        )}
        <li className="font-bold mt-4">Total: ${finalPrice.toFixed(2)}</li>
      </ul>

      <div className="mt-6">
        <h3 className="font-semibold text-sm mb-2">Price Trend</h3>
      </div>
    </div>
  );
};

export default PricingCard;
