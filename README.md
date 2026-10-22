# Chart.js Database Bar Chart

A bar chart built with Chart.js 4.4.4 that reads data from a PostgreSQL database. An Express API written in TypeScript sums every month column across all rows, and a Vite frontend written in TypeScript draws one bar per month.

## Requirements

- Node.js 20 or newer
- Docker

## Getting started

1. Start the database. The sample table and data are created automatically from `db/init.sql`:

```bash
   docker compose up -d
```

2. Install dependencies and start the API and the frontend together:

```bash
   npm install
   npm run dev
```

3. Open http://localhost:5173 in your browser.

The API runs on port 3000 and Vite proxies requests from `/api` to it. To use another database, set the `DATABASE_URL` environment variable.

## Scripts

- `npm run dev` starts the API and the frontend
- `npm run build` type-checks and builds the frontend to `dist/`

## Project structure

```
.
├── index.html
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── vite.config.ts
├── db
│   └── init.sql
├── server
│   └── index.ts
└── src
    └── main.ts
```
