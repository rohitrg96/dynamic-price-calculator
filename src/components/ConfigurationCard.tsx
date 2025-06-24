import React from 'react';
import { colors, addons, sizes } from '../utils/const';
import { Options } from './Options';
import type { Configprops } from '../utils/types';
import { useConfig } from '../hooks/useConfig';

const ConfigurationCard: React.FC<Configprops> = ({
  onChange,
  sizefromUrl,
  colorfromUrl,
  addonsfromUrl,
}) => {
  const { size, setSize, color, setColor, selectedAddons, handleAddonToggle } = useConfig({
    onChange,
  });

  const defSize = sizefromUrl ? sizefromUrl : size;
  const defColor = colorfromUrl ? colorfromUrl : color;
  const defAddonsfromUrl = addonsfromUrl ? addonsfromUrl : selectedAddons;

  return (
    <div className="p-4 border-2 border-cyan-600 rounded-xl shadow-sm bg-cyan-100">
      <h2 className="text-lg font-semibold mb-4">Configuration</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Size</label>
        <div className="flex gap-2">
          <Options items={sizes} item={defSize} setItem={setSize} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Color</label>
        <Options items={colors} item={defColor} setItem={setColor} />
      </div>

      <div>
        <label className="block font-medium mb-1">Add Ons</label>
        <div className="flex flex-wrap gap-2">
          {addons.map((addon) => (
            <button
              key={addon.value}
              onClick={() => handleAddonToggle(addon.value)}
              className={`cursor-pointer px-3 py-2 border rounded ${
                defAddonsfromUrl.includes(addon.value) ? 'bg-cyan-500 text-white' : ' bg-cyan-200'
              }`}
            >
              {addon.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationCard;
