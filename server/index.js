import 'dotenv/config';
import app from './src/app.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

const port = process.env.PORT || 3000;
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

async function start() {
  await client.connect();
  console.log('MongoDB connected');
  app.locals.db = client.db(); 
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

process.on('SIGINT', async () => { await client.close(); process.exit(0); });
process.on('SIGTERM', async () => { await client.close(); process.exit(0); });

start().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});