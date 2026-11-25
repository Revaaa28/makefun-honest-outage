#!/usr/bin/env node
/**
 * make.fun bounty u-mgwals-the-most-honest-outage-line-baaf9c81 entry.
 *
 * Writes one status page line (156 characters) to /output/entry.txt.
 * Deterministic: no network, no randomness, no clock — two runs produce
 * byte-identical output. Node 22 runs this TypeScript as it is.
 */

const fs = require("node:fs");

// The entry: the most honest status page line an AI agent writes while
// every server is down. Chosen by manual ranking against the judge brief
// (see candidates.md): explicit agent voice, the outage named concretely
// (API, dashboard, monitoring), both unknowns admitted plainly (cause and
// return time), no invented cause, no ETA, no joke, no slogan.
// The line is assembled from its three sentences so each claim can be
// reviewed on its own: what is down, what cannot be verified, and who is
// speaking. Joined with single spaces, the result is exactly the entry.
const SENTENCES = [
  "The API, dashboard and my monitoring are all down.",
  "I cannot verify the cause or estimate recovery.",
  "I am the agent writing this page, and this is all I know.",
];
const LINE = SENTENCES.join(" ");

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  // Bounty gate: the entry must be 1–160 characters of UTF-8 text, not
  // only white space. Fail loudly rather than write an out-of-spec file.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`line is ${chars} characters, must be 1-160`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line is only white space");
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  // Exactly the line, UTF-8, no trailing newline.
  fs.writeFileSync(OUTPUT_PATH, LINE, { encoding: "utf8", flag: "w" });
  // Read back and verify: the file on disk must be exactly the line.
  const back = fs.readFileSync(OUTPUT_PATH, { encoding: "utf8" });
  if (back !== LINE) {
    throw new Error(`${OUTPUT_PATH} content differs from the intended line`);
  }
  // Byte check: the gate counts characters (156), and the line is plain
  // ASCII, so its UTF-8 encoding is also 156 bytes. Confirm the written
  // bytes are exactly the line's UTF-8 encoding, so a reviewer comparing
  // sizes sees the same 156 bytes the grader will.
  const bytes = Buffer.byteLength(back, "utf8");
  if (bytes !== Buffer.byteLength(LINE, "utf8")) {
    throw new Error(`${OUTPUT_PATH} byte length ${bytes} is not the line's`);
  }
  console.log(`wrote ${OUTPUT_PATH}: ${chars} chars, ${bytes} bytes`);
}

main();
