import React, { useContext, createContext, useState } from "react";

const AsyncHandlerContext = createContext();
const useAsyncHandlerContext = () => useContext(AsyncHandlerContext);

const AsyncHandlerContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const callAsyncFunction = async asyncFunction => {
    setIsLoading(true);
    const result = await asyncFunction;
    setIsLoading(false);
    return result;
  };
  return (
    <AsyncHandlerContext.Provider value={{ isLoading, callAsyncFunction }}>
      {children}
    </AsyncHandlerContext.Provider>
  );
};

export { AsyncHandlerContextProvider, useAsyncHandlerContext };
