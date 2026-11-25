// The Funniest Office Joke — entry for make.fun
// u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
// Writes the single joke to /output/entry.txt.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  "I renamed the office Wi-Fi 'Reply All' — now nobody connects to it on purpose, exactly like the email.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check: the entry must be 1-200 characters of UTF-8 text,
// and not only whitespace — otherwise the scorer marks it invalid.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${chars}`,
  );
}
if (!JOKE.trim()) {
  throw new Error('entry must not be only whitespace');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), JOKE, 'utf8');
console.log('wrote entry.txt:');
console.log(JOKE);
