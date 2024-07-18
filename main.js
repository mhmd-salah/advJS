const abortController = new AbortController();
const abortSignal = abortController.signal;

// After 5 seconds the controller will abort
const handlerTimeout = setTimeout(() => {
  abortController.abort("Request timed out");
}, 10);

fetch("https://dummyjson.com/posts",{signal:abortSignal})
  .then((response) => response.json())
  .then((response) => {
    clearTimeout(handlerTimeout);
    console.log(response);
  })
  .catch((error) => {
    if ((error.name = "AbortError")) {
      console.log(abortSignal.reason);
    } else {
      console.error("Error: ", error);
    }
  });
