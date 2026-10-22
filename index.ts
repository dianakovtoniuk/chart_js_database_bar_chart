import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import pg from 'pg';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as const;

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/chartjs',
});

const app = express();

// serve the built frontend (npm run build creates dist/)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, '../dist')));

// sum every month column across all rows
app.get('/api/sums', async (_req, res) => {
  try {
    const columns = MONTHS.map((month) => `COALESCE(SUM("${month}"), 0)::int AS "${month}"`).join(', ');
    const { rows } = await pool.query<Record<string, number>>(`SELECT ${columns} FROM barchartjs`);

    res.json({
      labels: MONTHS,
      data: MONTHS.map((month) => rows[0][month]),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to load data' });
  }
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
