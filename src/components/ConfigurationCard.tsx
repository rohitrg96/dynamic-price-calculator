import React, { useState, useEffect } from "react";
import { colors, addons, sizes } from "../utils/const";
import { Options } from "./Options";

export interface Props {
  onChange: (config: { size: string; color: string; addons: string[] }) => void;
}

const ConfigurationCard: React.FC<Props> = ({ onChange }) => {
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("red");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleAddonToggle = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  useEffect(() => {
    onChange({ size, color, addons: selectedAddons });
  }, [size, color, selectedAddons]);

  return (
    <div className="p-4 border-2 border-cyan-600 rounded-xl shadow-sm bg-cyan-100">
      <h2 className="text-lg font-semibold mb-4">Configuration</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Size</label>
        <div className="flex gap-2">
          <Options items={sizes} item={size} setItem={setSize} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Color</label>
        <Options items={colors} item={color} setItem={setColor} />
      </div>

      <div>
        <label className="block font-medium mb-1">Add Ons</label>
        <div className="flex flex-wrap gap-2">
          {addons.map((addon) => (
            <button
              key={addon.value}
              onClick={() => handleAddonToggle(addon.value)}
              className={`px-3 py-2 border rounded ${
                selectedAddons.includes(addon.value)
                  ? "bg-cyan-500 text-white"
                  : " bg-cyan-200"
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
