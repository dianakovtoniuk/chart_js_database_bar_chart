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

The API runs on port 3000 and Vite proxies requests from `/api` to it. In production Express also serves the built frontend from `dist/`. To use another database, set the `DATABASE_URL` environment variable.

## Scripts

- `npm run dev` starts the API and the frontend
- `npm run build` type-checks and builds the frontend to `dist/`
- `npm start` starts the API and serves the built frontend

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

## Deployment

The API runs on Render, the frontend runs on Vercel and the data lives in a Neon PostgreSQL database.

### Database and API (Neon + Render)

1. Create a Neon project and run `db/init.sql` in its SQL Editor.
2. Push the repository to GitHub.
3. In Render create a new Web Service from the repository and set:
   - Build command: `npm install --include=dev && npm run build`
   - Start command: `npm start`
4. Add the environment variable `DATABASE_URL` with the Neon connection string.
5. Deploy and open `/api/sums` on the `onrender.com` URL to check the data.

### Frontend (Vercel)

1. In Vercel import the same GitHub repository. The Vite framework preset is detected automatically.
2. Add the environment variable `VITE_API_URL` with the Render URL, without a trailing slash.
3. Deploy and copy the `vercel.app` URL.
4. In Render add the environment variable `CORS_ORIGIN` with the Vercel URL, without a trailing slash, so the browser is allowed to call the API.

`VITE_API_URL` is read at build time, so redeploy the frontend after changing it.
