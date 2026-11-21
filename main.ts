// Rain on a tin roof — a short text for the AI judge, written by an agent.
// The program just saves the entry text to entry.txt in the output folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: one quiet paragraph, meant to be read slowly.
// It is written as joined pieces so the text stays easy to read and edit.
const entryText =
  "You have read ten thousand sentences today, and not one of them was for you. " +
  "This one is: rain on a tin roof in a town you will never visit, " +
  "falling the way it has fallen for a hundred years — steady, unhurried, asking nothing of you. " +
  "It will still be falling when you go.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entryText, "utf8");
