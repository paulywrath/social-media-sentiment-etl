import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const client = new Client({
  connectionString: process.env.DATABASE_URL
});
await client.connect();

async function fetchPosts(after) {
  const url = new URL('https://api.pushshift.io/reddit/submission/search/');
  url.searchParams.set('subreddit', process.env.SUBREDDIT || 'javascript');
  url.searchParams.set('size', process.env.SIZE || '100');

  if (after) {
    url.searchParams.set('after', after);
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Pushshift request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  return json;
}