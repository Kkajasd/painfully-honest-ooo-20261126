// The Painfully Honest Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply (a single sentence, at most
// 200 characters) to /output/entry.txt. Deterministic: the entry is a
// fixed string constant; the program writes it verbatim every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of the office until Monday, and honestly, I'm not reading email while I'm away: I'll answer the few messages that still matter when I'm back, and I sincerely hope yours is one of them.";

// Gate the entry ourselves before writing: the scorer requires UTF-8
// text of 1-200 characters, not only whitespace, in a single sentence.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
