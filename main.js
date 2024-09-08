"use strict";
// abort controller
// -> EX-2:
let controller = new AbortController();
controller.signal.addEventListener("abort", () => console.log("abort from event listener"));
console.log("aborted: " + controller.signal.aborted);
setTimeout(() => {
    controller.abort("cancel"); // abort
    console.log(controller.signal.reason);
    console.log("aborted: " + controller.signal.aborted);
}, 2000);


