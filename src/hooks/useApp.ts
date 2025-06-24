import type { PricingCardProps } from '../utils/types';
import { useState, useEffect } from 'react';

export const useApp = () => {
  const [config, setConfig] = useState({
    size: 'M',
    color: 'red',
    addons: [] as string[],
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const size = params.get('size') || 'M';
    const color = params.get('color') || 'red';
    const addonsParam = params.get('addons') || '';
    const addons = addonsParam ? addonsParam.split(',') : [];

    setConfig({ size, color, addons });
  }, []);

  const encodeConfigToQuery = (config: PricingCardProps) => {
    const params = new URLSearchParams();
    params.set('size', config.size);
    params.set('color', config.color);
    params.set('addons', config.addons.join(','));
    return params.toString();
  };

  const handleShare = () => {
    const query = encodeConfigToQuery(config);
    const shareableUrl = `${window.location.origin}?${query}`;
    navigator.clipboard.writeText(shareableUrl);
    alert('Shareable link copied!');
  };
  return { config, setConfig, handleShare };
};
