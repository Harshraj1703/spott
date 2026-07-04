<div align="center">

# 📍 Spott

**Discover, create, and manage events — all in one place.**

Spott is a full-stack event discovery and management platform built with Next.js and Convex. Organizers can create and publish events in seconds (with AI-assisted event generation), while attendees can explore events near them, register, and check in with QR codes.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Environment Variables](#-environment-variables) • [Project Structure](#-project-structure)

</div>

---

## ✨ Features

- **Explore & Search** — Browse events by category, location, or search by title, with a dedicated explore feed and location-based search bar.
- **AI-Assisted Event Creation** — Describe your event idea in plain language and let Gemini generate a title, description, category, and suggested capacity/ticket type for you.
- **Event Management Dashboard** — Organizers get a dashboard to track their events, registrations, and check-ins.
- **Registrations & Ticketing** — Support for free and paid events, with capacity limits and live registration counts.
- **QR Code Check-In** — Every registration generates a unique QR code; organizers can scan attendees in at the door with a built-in QR scanner.
- **Onboarding Flow** — New users pick their location and interests to personalize their event feed.
- **Cover Images** — Pick event cover photos directly from Unsplash.
- **Authentication** — Secure sign-up/sign-in powered by Clerk, synced with a Convex user table.
- **Dark/Light Theme** — Theming support via `next-themes`.

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Backend / Database | [Convex](https://convex.dev) |
| Authentication | [Clerk](https://clerk.com) |
| AI | [Google Generative AI (Gemini)](https://ai.google.dev) |
| UI Components | shadcn/ui, Radix (`@base-ui/react`), Tailwind CSS v4 |
| Forms & Validation | React Hook Form + Zod |
| QR Codes | `react-qr-code`, `html5-qrcode` |
| Images | Unsplash API |
| Misc | Embla Carousel, date-fns, lucide-react icons |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun
- A [Convex](https://convex.dev) account and project
- A [Clerk](https://clerk.com) account and application
- A [Google AI Studio](https://aistudio.google.com/) API key (Gemini)
- An [Unsplash Developer](https://unsplash.com/developers) API key

### 1. Clone the repository

```bash
git clone https://github.com/Harshraj1703/spott.git
cd spott
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root (see [Environment Variables](#-environment-variables) below for the full list).

### 4. Set up Convex

```bash
npx convex dev
```

This starts the Convex development server and connects your project to a Convex deployment. Follow the CLI prompts to link or create a Convex project, then copy the generated deployment URL into `NEXT_PUBLIC_CONVEX_URL`.

### 5. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🔑 Environment Variables

Create a `.env.local` file with the following:

```bash
# Convex
NEXT_PUBLIC_CONVEX_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=

# Google Generative AI (Gemini) — used for AI-assisted event generation
GEMINI_API_KEY=

# Unsplash — used for event cover image search
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
```

> **Note:** After setting `CLERK_JWT_ISSUER_DOMAIN`, make sure to also configure it in your Convex dashboard so Convex can validate Clerk-issued JWTs. See the [Convex + Clerk auth guide](https://docs.convex.dev/auth/clerk) for details.

## 📁 Project Structure

```
spott/
├── app/
│   ├── (auth)/          # Sign-in / sign-up routes (Clerk)
│   ├── (main)/          # Authenticated app: create-event, my-events, my-tickets
│   ├── (public)/        # Public routes: explore, event details
│   └── api/
│       └── generate-event/  # Gemini-powered event generation endpoint
├── components/          # Shared UI components (event cards, header, modals, etc.)
│   └── ui/               # shadcn/ui primitives
├── convex/              # Convex backend: schema, queries, mutations
│   ├── schema.js         # Users, events, and registrations tables
│   ├── events.js
│   ├── explore.js
│   ├── registrations.js
│   ├── search.js
│   └── users.js
├── hooks/               # Custom React hooks
└── lib/                 # Utilities and static data (categories, etc.)
```

## 🗄 Data Model

Spott's Convex schema is built around three core tables:

- **`users`** — Clerk-linked user profiles, onboarding state, location, interests, and event creation limits.
- **`events`** — Event details including schedule, location (physical or online), capacity, ticketing, and category/tags, with search and category indexes.
- **`registrations`** — Attendee registrations linked to events and users, each with a unique QR code and check-in status.

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or file an issue.

## 📄 License

No license has been specified for this project yet. Consider adding one (e.g. MIT) to clarify how others can use this code.
