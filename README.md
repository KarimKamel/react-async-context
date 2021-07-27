A react context provider that provides:
1-"isLoading" context state
2-"callAsyncFunction"

The context is used to wrap a react component that makes async calls.
The component can then wrap any async function call it makes with
callAsyncFunction. From that moment the context will take the responsability of setting the "isLoading" context variable to true, while waiting for the async call to return.
Then once the call has returned it will set the isLoading state variable back to false.

# example usage:

# App.js

```
import {AsyncHandlerContextProvider} from "react-async-context";

function App() {
	return (
		<div className="App">
			<AsyncHandlerContextProvider>
				<Content/>
			</AsyncHandlerContextProvider>
	)
}
```

#Content.js

```
import React from "react";

import {useAsyncHandlerContext} from "react-async-context";

export default function Content() {
const { isLoading, callAsyncFunction } = useAsyncHandlerContext();

const makeCall = async () => {

    const ret = await callAsyncFunction(
      fetch("https://example.com/api/user/1/")
    );
    const data = await callAsyncFunction(ret.json());
    console.log(data);

};
	return (
		<div className="container">
			<button onClick={makeCall}>make call</button>
			<div>{isLoading ? <h1>waiting for async call...</h1> : <h1>async call has returned</h1>}</div>
		</div>
	);
}
```
