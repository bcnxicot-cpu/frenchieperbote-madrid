import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import test from "node:test";

const port = 3471;
const base = `http://127.0.0.1:${port}`;
let server;

test.before(async () => {
  server = spawn("npm", ["run", "start", "--", "-p", String(port)], { stdio: "ignore" });
  for (let i = 0; i < 30; i += 1) {
    try { if ((await fetch(base)).ok) return; } catch {}
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  throw new Error("The production server did not start");
});

test.after(() => server?.kill("SIGTERM"));

test("renders the commercial story and trust signals", async () => {
  const html = await (await fetch(base)).text();
  for (const text of ["Cada perro", "15", "200", "4,9", "55 reseñas", "San Fernando de Henares"]) {
    assert.match(html, new RegExp(text));
  }
});

test("includes every primary destination", async () => {
  const html = await (await fetch(base)).text();
  for (const url of ["wa.me/34675214221", "google.com/maps", "instagram.com/frenchieperbote", "mailto:frenchieperbote@hotmail.com", "frenchieperbote.com/collections/all"]) {
    assert.match(html, new RegExp(url.replaceAll("/", "\\/")));
  }
});
