// News-image entry (Node 22, standard library only): the repository holds the
// finished infographic as entry.png, and this program copies it to the output
// directory the grader provides. No network, no drawing at run time — the
// image is a fixed file, so both runs write the same bytes.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Guard against a truncated copy: the output must be byte-identical to the
// image in the repository, so refuse to finish silently on a size mismatch.
if (statSync(src).size !== statSync(dest).size) {
  throw new Error('entry.png copy size mismatch');
}
