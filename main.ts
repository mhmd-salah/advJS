// abort controller
// -> EX:
console.log("operation start");

let controller: AbortController = new AbortController();
let signal: AbortSignal = controller.signal;

signal.addEventListener("abort", () => console.log("abort"));

console.log("aborted: " + controller.signal.aborted);

setTimeout(() => {
  controller.abort();
  console.log(controller.signal.aborted);
}, 2000);

// -> EX:

