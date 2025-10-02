# Bolt.new Fork - AI-Powered Web Development

## Overview
This is a fork of Bolt.new by Cole Medin - an AI-powered web development agent that allows you to build full-stack applications directly in the browser. It integrates AI models with an in-browser development environment powered by StackBlitz's WebContainers.

**Key Features:**
- Multi-LLM support: Choose from OpenAI, Anthropic, Ollama, OpenRouter, Gemini, Groq, and Mistral models
- Full-stack development in the browser using WebContainers
- Install npm packages, run Node.js servers, interact with APIs
- Export projects as ZIP files
- GitHub integration for publishing projects

## Project Architecture

### Technology Stack
- **Framework:** Remix (React-based full-stack framework)
- **Build Tool:** Vite
- **Styling:** UnoCSS + SCSS
- **Code Editor:** CodeMirror
- **Terminal:** xterm.js
- **AI Integration:** Vercel AI SDK
- **Deployment:** Cloudflare Pages (via Wrangler)
- **Package Manager:** pnpm

### Project Structure
- `app/` - Main application code
  - `components/` - React components
  - `lib/` - Core libraries (stores, hooks, runtime, webcontainer)
  - `routes/` - Remix routes
  - `styles/` - SCSS stylesheets
  - `utils/` - Utility functions
- `public/` - Static assets
- `functions/` - Cloudflare Functions

## Development Setup

### Environment Variables
API keys are optional - only set the ones for AI providers you want to use:
- `GROQ_API_KEY` - For Groq models
- `OPENAI_API_KEY` - For GPT models
- `ANTHROPIC_API_KEY` - For Claude models
- `OPEN_ROUTER_API_KEY` - For OpenRouter models
- `GOOGLE_GENERATIVE_AI_API_KEY` - For Gemini models
- `MISTRAL_API_KEY` - For Mistral models
- `OLLAMA_API_BASE_URL` - For local Ollama models
- `VITE_LOG_LEVEL` - Set to "debug" for detailed logging

### Running in Replit
The project is configured to run on Replit with:
- Frontend dev server on port 5000
- Vite configured to bind to 0.0.0.0
- HMR configured for WebSocket proxy compatibility

### Development Workflow
- Use the "Frontend" workflow to run `pnpm run dev`
- The app runs in development mode with hot module replacement
- Access via the Replit webview

## Recent Changes
- **2025-10-02:** UI/UX Modernization & Replit Configuration
  - **Design System Updates:**
    - Modernized color palette with vibrant blues and improved grays
    - Added gradient effects to title and header logo
    - Improved typography with better spacing and readability
    - Enhanced input fields with focus rings and hover states
    - Updated dropdowns with rounded corners and smooth transitions
    - Redesigned example prompts as interactive cards
    - Added smooth animations throughout the interface
  - **Replit Environment Setup:**
    - Updated vite.config.ts to bind to 0.0.0.0:5000
    - Configured HMR for wss proxy
    - Created .env.local with debug logging
    - Set up Frontend workflow
    - Configured Mistral API key for AI models
  - **Bug Fixes:**
    - Fixed model selector to only show available providers
    - Ensured proper provider-model synchronization

## Deployment
The application is built with Cloudflare Pages in mind (uses `@remix-run/cloudflare` adapter). 

**For Replit deployment:**
- Development: `pnpm run dev` (runs on port 5000)
- Production build: `pnpm run build`

**Note:** To deploy to Vercel or other platforms, you'll need to:
- Install the appropriate Remix adapter (e.g., `@remix-run/vercel`)
- Update `app/entry.server.tsx` imports
- Modify build configuration

## Notes
- Requires Node.js v20.15.1+
- Uses pnpm for package management
- WebContainers require modern browser support
- Chrome 129 has known issues with local dev (use Chrome Canary for testing)
