import { useState, useEffect } from "react";
import type { Configprops } from "../utils/types";

export const useConfig = ({ onChange }: Configprops) => {
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

  return { size, setSize, color, setColor, selectedAddons, handleAddonToggle };
};
