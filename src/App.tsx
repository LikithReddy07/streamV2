import { useState, useMemo, useCallback, useEffect } from 'react';
import { fetchSports, fetchMatches, fetchStreams } from './api/index';
import { APIMatch } from './types';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { useApi } from './hooks/useApi';
import { PinScreen } from './components/PinScreen';

function App() {
  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State for selections
  const [selectedSport, setSelectedSport] = useState<string>('');
  const [selectedMatch, setSelectedMatch] = useState<APIMatch | null>(null);
  const [selectedSource, setSelectedSource] = useState<string>('');

  // --- Data Fetching with our custom hook ---
  const { data: sports, status: sportsStatus } = useApi(fetchSports, [true]); // [true] to run on mount

  const { data: matches, status: matchesStatus } = useApi(
    () => fetchMatches(selectedSport),
    [selectedSport]
  );

  const selectedMatchSource = useMemo(
    () => selectedMatch?.sources.find((s) => s.source === selectedSource),
    [selectedMatch, selectedSource]
  );

  const { data: streams, status: streamsStatus } = useApi(
    () => fetchStreams(selectedMatchSource!.source, selectedMatchSource!.id),
    [selectedMatchSource]
  );

  // Reset selections when a new sport is chosen
  useEffect(() => {
    setSelectedMatch(null);
    setSelectedSource('');
  }, [selectedSport]);

  const handleMatchSelect = useCallback((match: APIMatch) => {
    setSelectedMatch(match);
    setSelectedSource(''); // Reset source on new match selection
  }, []);

  const streamUrl = useMemo(() => streams?.[0]?.embedUrl, [streams]);

  if (!isAuthenticated) {
    return <PinScreen onPinSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Streamed Browser</h1>
      </header>
      <main className="main-content">
        <Sidebar
          sports={sports || []}
          matches={matches || []}
          selectedSport={selectedSport}
          selectedMatch={selectedMatch}
          onSportChange={setSelectedSport}
          onMatchSelect={handleMatchSelect}
          loadingSports={sportsStatus === 'loading'}
          loadingMatches={matchesStatus === 'loading'}
        />
        <ContentArea
          match={selectedMatch}
          streamUrl={streamUrl}
          selectedSource={selectedSource}
          onSourceChange={setSelectedSource}
          loadingStreams={streamsStatus === 'loading'}
          error={null} // We can enhance this to show specific errors if needed
        />
      </main>
    </div>
  );
}

export default App;