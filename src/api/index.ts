import { API_CONFIG } from '../config';
import { Sport, APIMatch, Stream } from '../types';

const { BASE_URL } = API_CONFIG;

async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export const fetchSports = (): Promise<Sport[]> => {
  return apiFetch<Sport[]>('/sports');
};

export const fetchMatches = (sportId: string): Promise<APIMatch[]> => {
  return apiFetch<APIMatch[]>(`/matches/${sportId}`);
};

export const fetchStreams = (
  source: string,
  matchId: string
): Promise<Stream[]> => {
  return apiFetch<Stream[]>(`/stream/${source}/${matchId}`);
};