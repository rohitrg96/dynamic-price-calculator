import type { Option } from './types';

export const sizes: Option[] = [
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
];

export const colors: Option[] = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Black', value: 'black' },
];

export const addons: Option[] = [
  { label: 'Custom Print', value: 'print' },
  { label: 'Gift Wrap', value: 'wrap' },
];

export const basePrices: Record<string, number> = {
  S: 10,
  M: 12,
  L: 15,
};

export const addonPrices: Record<string, number> = {
  print: 4.0,
  wrap: 2.5,
};

export const mockPriceData = [
  { date: '2024-12', price: 12.99 },
  { date: '2025-01', price: 13.49 },
  { date: '2025-02', price: 13.99 },
  { date: '2025-03', price: 12.99 },
];
