import { APIMatch } from '../types';
import { formatDate } from '../utils/formatters';

interface StreamPlayerProps {
  streamUrl?: string;
  loading: boolean;
}

function StreamPlayer({ streamUrl, loading }: StreamPlayerProps) {
  return (
    <div className="stream-player__container">
      {loading && <div className="stream-player__overlay">Loading Stream...</div>}
      {streamUrl && !loading && (
        <iframe
          className="stream-player__iframe"
          src={streamUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Stream Player"
        ></iframe>
      )}
    </div>
  );
}

interface ContentAreaProps {
  match: APIMatch | null;
  streamUrl?: string;
  selectedSource: string;
  onSourceChange: (source: string) => void;
  loadingStreams: boolean;
  error: string | null;
}

export function ContentArea({
  match,
  streamUrl,
  selectedSource,
  onSourceChange,
  loadingStreams,
  error,
}: ContentAreaProps) {
  if (error) {
    return <div className="content-area"><p className="error-message">{error}</p></div>;
  }

  if (!match) {
    return <div className="content-area"><p>Select a match from the list to begin.</p></div>;
  }

  return (
    <div className="content-area">
      <h2>{match.title}</h2>
      <p className="match-item__date">{formatDate(match.date)}</p>

      <div className="form-group">
        <label htmlFor="source-select">Stream Source</label>
        <select
          id="source-select"
          className="select"
          value={selectedSource}
          onChange={(e) => onSourceChange(e.target.value)}
          disabled={loadingStreams}
        >
          <option value="">Select a source</option>
          {match.sources.map((source) => (
            <option key={source.source} value={source.source}>{source.source}</option>
          ))}
        </select>
      </div>

      <StreamPlayer streamUrl={streamUrl} loading={loadingStreams} />
    </div>
  );
}