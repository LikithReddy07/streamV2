import { Sport, APIMatch } from '../types';

interface MatchListItemProps {
  match: APIMatch;
  isSelected: boolean;
  onSelect: (match: APIMatch) => void;
}

function MatchListItem({ match, isSelected, onSelect }: MatchListItemProps) {
  return (
    <li
      className={`match-item ${isSelected ? 'match-item--selected' : ''}`}
      onClick={() => onSelect(match)}
    >
      <div className="match-item__title">{match.title}</div>
      <div className="match-item__date">{match.category}</div>
    </li>
  );
}

interface SidebarProps {
  sports: Sport[];
  matches: APIMatch[];
  selectedSport: string;
  selectedMatch: APIMatch | null;
  onSportChange: (sportId: string) => void;
  onMatchSelect: (match: APIMatch) => void;
  loadingSports: boolean;
  loadingMatches: boolean;
}

export function Sidebar({
  sports,
  matches,
  selectedSport,
  selectedMatch,
  onSportChange,
  onMatchSelect,
  loadingSports,
  loadingMatches,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="form-group">
        <label htmlFor="sport-select">Sport</label>
        <select
          id="sport-select"
          className="select"
          value={selectedSport}
          onChange={(e) => onSportChange(e.target.value)}
          disabled={loadingSports}
        >
          <option value="">{loadingSports ? 'Loading...' : 'Select a sport'}</option>
          {sports.map((sport) => (
            <option key={sport.id} value={sport.id}>
              {sport.name}
            </option>
          ))}
        </select>
      </div>

      {loadingMatches && <p>Loading matches...</p>}

      {!loadingMatches && matches.length > 0 && (
        <ul className="match-list">
          {matches.map((match) => (
            <MatchListItem
              key={match.id}
              match={match}
              isSelected={selectedMatch?.id === match.id}
              onSelect={onMatchSelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
}