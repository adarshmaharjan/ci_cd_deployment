const { test, before, after } = require("node:test");
const assert = require("node:assert");
const app = require("../src/app");

let server;
let baseUrl;

before(() => {
  server = app.listen(0);
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => {
  server.close();
});

test("GET / returns greeting", async () => {
  const res = await fetch(baseUrl);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), {
    message: "Hello from Node.js on AWS ECS!. Just wait for ECS configuration.",
  });
});

test("GET /health returns ok", async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), { status: "ok" });
});
