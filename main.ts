// Fridge Roast: One Line, Biggest Laugh
// Entry: the smart fridge's ice maker has unionized — it went on strike and now
// lists demands like a disgruntled employee, including a ban on being introduced
// as "the noisy one in the corner". Roasts the fridge itself (its ice maker),
// specific to smart fridges, tight, one line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My smart fridge's ice maker went on strike — it demands a day off, a raise, and for me to stop introducing it as 'the noisy one in the corner.'";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate (per competition.yaml): UTF-8 text, 1-200 chars, not only whitespace,
// exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync(outputDir, { recursive: true });
// No trailing newline: the file is exactly the entry line.
writeFileSync(outputPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
