CREATE TABLE posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT,
  created_utc TIMESTAMP,
  flair TEXT,
  raw_json JSONB
);

CREATE TABLE terms (
  id SERIAL PRIMARY KEY,
  post_id TEXT REFERENCES posts(id),
  term TEXT NOT NULL
);