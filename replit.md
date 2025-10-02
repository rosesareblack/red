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
- **2025-10-02:** GitHub Import & Replit Environment Setup
  - **Initial Setup:**
    - Installed all dependencies with pnpm
    - Verified Vite configuration (0.0.0.0:5000, HMR for WSS proxy)
    - Created .env.local with debug logging enabled
    - Configured Frontend workflow to run development server
  - **Deployment Approach Decision:**
    - Evaluated Vercel migration but decided against it (caused SSR errors)
    - Kept original Cloudflare adapter - works perfectly in Replit's Node.js environment
    - Environment variables use process.env fallback, ensuring compatibility across platforms
  - **Why Cloudflare Adapter Works in Replit:**
    - The app uses `process.env` fallback for all environment variables
    - Cloudflare Workers types are only used for type checking, not runtime
    - Vite dev server runs in Node.js regardless of adapter
    - This is the most cost-effective, battle-tested approach

## Deployment

### Development (Replit)
- **Command:** `pnpm run dev`
- **Port:** 5000 (bound to 0.0.0.0)
- **HMR:** Configured for WebSocket proxy compatibility

### Production (Replit Autoscale)
- **Build:** `pnpm run build`
- **Start:** `pnpm run start` (uses Wrangler in Node.js mode)
- **Deployment Target:** Autoscale (configured in .replit)

### Alternative Platforms
The Cloudflare adapter works in Node.js environments due to environment variable fallbacks. For true Cloudflare Pages deployment, use `pnpm run deploy`.

For Vercel/other platforms: Consider using `@remix-run/node` adapter for better compatibility, though the current setup works due to the fallback system.

## Notes
- Requires Node.js v20.15.1+
- Uses pnpm for package management
- WebContainers require modern browser support
- Chrome 129 has known issues with local dev (use Chrome Canary for testing)
