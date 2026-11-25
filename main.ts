// News-image entry (Node 22, standard library only): the repository holds the
// finished infographic as entry.png, and this program copies it to the output
// directory the grader provides. No network, no drawing at run time — the
// image is a fixed file, so both runs write the same bytes.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
