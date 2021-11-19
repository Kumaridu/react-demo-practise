import Core from './components/Core';
import { useState } from 'react';
function App() {
  const [appId, setAppId] = useState(1);
  return <Core key={appId} appId={() => setAppId(appId + 1)} />;
}

export default App;
