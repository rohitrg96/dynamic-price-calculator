export type Option = {
  label: string;
  value: string;
};

export type GlobalCardProps = {
  children: React.ReactNode;
  save: () => void;
};

export interface Props {
  size: string;
  color: string;
  addons: string[];
}

export interface Props {
  onChange: (config: { size: string; color: string; addons: string[] }) => void;
}

export type ConfigurationCardProps = {
  onChange: (config: { size: string; color: string; addons: string[] }) => void;
};

export type PricingCardProps = {
  size: string;
  color: string;
  addons: string[];
};

export interface PriceInputs {
  size: string;
  addons: string[];
}

export interface Configprops {
  onChange: (config: { size: string; color: string; addons: string[] }) => void;
  sizefromUrl?: string;
  colorfromUrl?: string;
  addonsfromUrl?: string[];
}
