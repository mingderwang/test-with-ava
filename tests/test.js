const test = require("ava");

test("foo", (t) => {
  t.is(2 + 2, 4);
});

test("bar", async (t) => {
  const bar = Promise.resolve("bar");
  t.is(await bar, "bar");
});
