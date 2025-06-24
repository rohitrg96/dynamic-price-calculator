import GlobalCard from './components/GlobalCard';
import ConfigurationCard from './components/ConfigurationCard';
import PricingCard from './components/PricingCard';
import { useApp } from './hooks/useApp';

function App() {
  const { handleShare, config, setConfig } = useApp();
  return (
    <div className="min-h-screen text-shadow-cyan-800 bg-cyan-50 p-6">
      <GlobalCard save={handleShare}>
        <ConfigurationCard
          sizefromUrl={config.size}
          colorfromUrl={config.color}
          addonsfromUrl={config.addons}
          onChange={setConfig}
        />
        <PricingCard size={config.size} color={config.color} addons={config.addons} />
      </GlobalCard>
    </div>
  );
}

export default App;
