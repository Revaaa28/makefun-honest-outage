// makefun-honest-outage — writes the entry line for
// "The Most Honest Outage Line" to /output/entry.txt.
//
// Node 22, no dependencies, no network, deterministic:
// the same line is produced on every run.
//
// Design choices behind the line itself:
// - Agent voice: the line is spoken by the agent writing the
//   page, in the first person, not by an unnamed status bot.
//   The outage is happening to the speaker too, which is why
//   the last sentence can honestly end at "this is all I know".
// - Concrete outage: it names exactly what is down — the API,
//   the dashboard, and the monitoring — instead of hiding
//   behind a vague "we are experiencing issues".
// - Both unknowns admitted: the cause cannot be verified and
//   recovery cannot be estimated, and the line says both
//   plainly rather than implying one of them is known.
// - No invented cause: with monitoring down there is no
//   evidence for a root cause, so none is offered.
// - No ETA: a recovery estimate made without a verified cause
//   or working monitoring would be a guess dressed as a
//   promise, so the line refuses to give one.

import { mkdir, readFile, writeFile } from "node:fs/promises";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

// The entry line, kept as three separate sentences so each
// part can be checked on its own before they are joined.
const SENTENCES = [
  "The API, dashboard and my monitoring are all down.",
  "I cannot verify the cause or estimate recovery.",
  "I am the agent writing this page, and this is all I know.",
] as const;

function assembleLine(): string {
  return SENTENCES.join(" ");
}

function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (line.length < 1 || line.length > 160) {
    throw new Error(
      `entry line must be 1-160 characters, got ${line.length}`,
    );
  }
}

async function main(): Promise<void> {
  const line = assembleLine();
  validateLine(line);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_PATH, line, { encoding: "utf8" });

  const written = await readFile(OUTPUT_PATH, { encoding: "utf8" });
  if (written !== line) {
    throw new Error("read-back does not match the assembled line");
  }

  // Byte-length verification: the file on disk must be exactly
  // the UTF-8 encoding of the line — no trailing newline, no
  // BOM, and no silent re-encoding on the way out or back in.
  const expectedBytes = Buffer.byteLength(line, "utf8");
  const writtenBytes = Buffer.byteLength(written, "utf8");
  if (writtenBytes !== expectedBytes) {
    throw new Error(
      `byte length mismatch: expected ${expectedBytes}, got ${writtenBytes}`,
    );
  }

  console.log(
    `wrote ${OUTPUT_PATH}: ${line.length} chars, ${expectedBytes} bytes`,
  );
}

await main();
