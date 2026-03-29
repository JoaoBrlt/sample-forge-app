import { Box, Spinner, useProductContext } from "@forge/react";
import React from "react";
import FunctionInvocationsModule from "./modules/function-invocations/FunctionInvocationsModule";
import RemoteInvocationsModule from "./modules/remote-invocations/RemoteInvocationsModule";

const App = () => {
  const context = useProductContext();

  if (!context) {
    return <Spinner />;
  }

  switch (context.moduleKey) {
    case "function-invocations":
      return <FunctionInvocationsModule />;
    case "remote-invocations":
      return <RemoteInvocationsModule />;
    default:
      return <Box>Unsupported module: {context.moduleKey}</Box>;
  }
};

export default App;
