# Streamed App - AI Agent Context

This document provides a concise summary of the Streamed React application for AI agent comprehension.

## 1. Objective

The application allows users to browse sports matches, select a streaming source, and watch the live stream via an embedded player.

## 2. Core Workflow

The application follows a sequential data-fetching logic:

1.  **Fetch Sports**: On initial load, call `GET /api/sports` to populate a list of available sports.
2.  **Fetch Matches**: When a user selects a sport, call `GET /api/matches/[sport]` to get a list of matches for that sport.
3.  **Select Match**: The user selects a match. The application displays its details, including the available `sources`.
4.  **Fetch Streams**: When a user selects a source, call `GET /api/stream/[source]/[id]` using the `source` and `id` from the match data.
5.  **Play Stream**: The application receives a list of streams and embeds the `embedUrl` of the first or selected stream into an `<iframe>`.

## 3. API Contract

The API base URL is `https://streamed.pk/api`. All endpoints below are relative to this base.

The application interacts with three primary endpoints.

### `GET /api/sports`
-   **Description**: Fetches all available sport categories.
-   **Response**: `Sport[]`

```typescript
interface Sport {
  id: string;   // e.g., "football"
  name: string; // e.g., "Football"
}
```

### `GET /api/matches/[sport]`
-   **Description**: Fetches all matches for a given sport ID.
-   **Response**: `APIMatch[]`

```typescript
interface APIMatch {
  id: string;
  title: string;
  category: string;
  date: number; // Unix timestamp (ms)
  teams?: {
    home?: { name: string; badge: string; };
    away?: { name: string; badge: string; };
  };
  sources: { 
    source: string; // e.g., "alpha"
    id: string;     // Source-specific ID
  }[];
}
```

### `GET /api/stream/[source]/[id]`
-   **Description**: Fetches stream URLs for a specific match source.
-   **Response**: `Stream[]`

```typescript
interface Stream {
  id: string;
  language: string;
  hd: boolean;
  embedUrl: string; // URL for the iframe src
  source: string;
}
```

## 4. Key Files

-   `src/App.tsx`: The main React component containing all UI, state management, and effect hooks for the workflow.
-   `src/api.ts`: A module that isolates all `fetch` calls to the API endpoints.
-   `src/types.ts`: (Implicit) Contains the TypeScript interfaces for `Sport`, `APIMatch`, and `Stream`.
-   `specs/streamed-app-spec.md`: The original human-readable specification document outlining the project goals and user flow.