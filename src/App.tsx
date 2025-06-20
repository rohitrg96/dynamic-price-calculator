import { useState } from "react";
import GlobalCard from "./components/GlobalCard";
import ConfigurationCard from "./components/ConfigurationCard";
import PricingCard from "./components/PricingCard";

function App() {
  const [config, setConfig] = useState({
    size: "M",
    color: "red",
    addons: [] as string[],
  });

  const encodeConfigToQuery = (config: {
    size: string;
    color: string;
    addons: string[];
  }) => {
    const savedConfig = [];
    const configObj = {
      size: config.size,
      color: config.color,
      addons: [...config.addons],
    };
    savedConfig.push(configObj);

    const params = new URLSearchParams();
    params.set("size", config.size);
    params.set("color", config.color);
    params.set("addons", config.addons.join(","));
    return params.toString();
  };

  const handleShare = () => {
    const query = encodeConfigToQuery(config);
    const shareableUrl = `${window.location.origin}?${query}`;
    navigator.clipboard.writeText(shareableUrl);
    alert(" Config Saved and Shareable link copied!");
  };

  return (
    <div className="min-h-screen text-shadow-cyan-800 bg-cyan-50 p-6">
      <GlobalCard save={handleShare}>
        <ConfigurationCard onChange={setConfig} />
        <PricingCard
          size={config.size}
          color={config.color}
          addons={config.addons}
        />
      </GlobalCard>
    </div>
  );
}

export default App;
