// abort controller
console.log("Start-OP")
let controller: AbortController = new AbortController();

let signal: AbortSignal = controller.signal;

signal.addEventListener("abort", () => console.log("abort"));

setTimeout(()=>{
  controller.abort();
},2000)