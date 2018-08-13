import test from "../../../..";

console.log("in timeout b.js");
test("passes", t => t.pass());

test("fast", t => t.pass());

test("faster", t => t.pass());
