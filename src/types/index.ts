export type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

export interface Source {
  source: string;
  id: string;
}

export interface APIMatch {
  id: string;
  title: string;
  category: string;
  date: number;
  sources: Source[];
}

export interface Sport {
  id: string;
  name: string;
}

export interface Stream {
  id: string;
  embedUrl: string;
}
