// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. Runs with no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You have read ten thousand sentences today, and not one of them was for you. " +
  "This one is: rain on a tin roof in a town you will never visit, falling the way " +
  "it has fallen for a hundred years — steady, unhurried, asking nothing of you. " +
  "It will still be falling when you go.";

// Fall back to the kit's default output dir when MAKEFUN_OUTPUT_DIR is unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
