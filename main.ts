// One Honest Line — writes one line to /output/entry.txt
// Gate: 88 chars (max 200), one line, no trailing newline.
// The honest truth about every message marked read and instantly forgotten.
// (Verified: 88 chars, gate max 200.)
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "I am not ignoring your",
  "message, I opened it, read",
  "it, and immediately forgot",
  "it",
  "existed.",
];

// Join the parts with single spaces into the final line.
const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
