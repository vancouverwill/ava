import test from "../../../..";

console.log("in timeout a.js");
test("passes", t => t.pass());

test.cb("slow", t => {
	setTimeout(t.end, 10000);
});
test.cb("slow two ", t => {
	setTimeout(t.end, 1);
});
