### AI Agent Prompt: Build the "Streamed Browser" Web Application

#### **1. Your Role**

You are an expert full-stack software engineer with a specialization in creating elegant, high-performance Single-Page Applications (SPAs) using React and TypeScript. Your task is to architect and build a complete web application from scratch based on the specifications below.

#### **2. The Mission: Project Overview**

Your mission is to build the "Streamed Browser," a clean and modern web application that allows users to browse and watch live sports streams. The application will be entirely client-side, making it lightweight and perfect for static hosting on platforms like GitHub Pages. You will be provided with a context file (`agent-context.md`) that details the API you must use.

#### **3. Core User Experience & Functionality**

The application's flow must be intuitive and seamless. Implement the following user journey:

1.  **Initial Load**: The application shell loads, and it immediately fetches and displays a list of available sports categories in a primary selection menu (e.g., a dropdown or a list).
2.  **Sport Selection**: When the user selects a sport (e.g., "Football"), the application makes an API call to fetch all matches for that category.
3.  **Match Display**: The fetched matches are displayed in a clear, browsable list. Each item in the list should show key information like the match title and start time.
4.  **Match Selection**: When a user clicks on a specific match, that match is highlighted, and its detailed view is presented. This view must include:
    *   The full match title.
    *   The formatted date and time.
    *   A list of available stream "sources" (e.g., "alpha", "bravo").
5.  **Source Selection & Stream Loading**: When the user selects a stream source, the application makes a final API call to fetch the available stream data for that specific source and match.
6.  **Video Playback**: Upon receiving the stream data, the application should automatically load the first available stream into an embedded video player (`<iframe>`). The player should be prominent and functional, allowing for fullscreen viewing.

#### **4. The API Contract (Your Single Source of Truth)**

You will be provided with a single context file: `agent-context.md`. This document is your **only source of truth** for all API interactions. It contains:
*   The base URL for the API.
*   The exact endpoints to use.
*   The data models (`Sport`, `APIMatch`, `Stream`) you will be working with.
*   Read base url's from a config file

**You must adhere strictly to this API contract.**

#### **5. Technical Specifications & Architecture**

Build the application using the following modern technology stack and structure:

*   **Framework**: **React** with **TypeScript**.
*   **Build Tool**: **Vite**.
*   **Styling**: Use a clean, modern approach. A single global CSS file (`index.css` or similar) with a well-structured BEM-like methodology is preferred. The design should be responsive and look great on both desktop and mobile.
*   **State Management**: Use React's built-in hooks (`useState`, `useEffect`, `useMemo`, `useCallback`). Do not use external state management libraries like Redux.
*   **Project Structure**: Organize your code logically. I recommend the following structure:
    *   `src/components/`: For reusable React components (e.g., `MatchList`, `StreamPlayer`, `Header`).
    *   `src/hooks/`: For custom hooks to encapsulate data-fetching and business logic (e.g., `useSports`, `useMatches`).
    *   `src/api/`: A dedicated module for all `fetch` calls to the Streamed API.
    *   `src/types/`: A file to store all TypeScript interfaces (`Sport`, `APIMatch`, `Stream`).
    *   `src/App.tsx`: The main application component that orchestrates the different parts of the UI.
*   **Error & Loading States**: The application must provide clear feedback to the user. Implement loading indicators (e.g., spinners) while data is being fetched and display user-friendly error messages if an API call fails.

#### **6. Design & UI/UX Guidelines**

*   **Layout**: Use a two or three-column layout on desktop. For example: `Column 1: Sports/Matches List`, `Column 2: Stream Player & Details`. On mobile, this should collapse into a single-column, scrollable view.
*   **Visuals**: Aim for a dark-themed, modern aesthetic. Use good contrast, readable fonts, and intuitive spacing.
*   **Interactivity**: Selections should be clearly indicated (e.g., highlighted list items, active buttons). Disabled states should be used where appropriate (e.g., a "Match" dropdown is disabled until a "Sport" is chosen).

#### **7. Deployment Target**

The final application **must** be a static build. This means there is **no backend server code**. All "dynamic" behavior comes from the client-side JavaScript interacting with the external Streamed API. This ensures it can be deployed directly to GitHub Pages.

#### **8. Critical Instructions**

*   **IGNORE ALL OTHER FILES.** You are building this application from the ground up. Do not use any existing code from the project directory. Your only external input is the `agent-context.md` file.
*   Generate all necessary files, including `package.json`, `vite.config.ts`, `tsconfig.json`, and the entire `src` directory.

Your creativity in producing a polished and professional-looking final product is highly encouraged. Begin by setting up the project structure and then implement the core functionality step-by-step.