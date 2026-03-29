import { invoke } from "@forge/bridge";
import { Box, Button, Stack } from "@forge/react";
import React from "react";

const FunctionInvocationsModule = () => {
  const triggerFunction1 = () => {
    invoke("function-1")
      .then((response) => {
        console.log("Successfully invoked function-1:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke function-1:", error);
      });
  };

  const triggerFunction2 = () => {
    invoke("function-2", { foo: "bar" })
      .then((response) => {
        console.log("Successfully invoked function-2:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke function-2:", error);
      });
  };

  const triggerFunction3 = () => {
    invoke("function-3")
      .then((response) => {
        console.log("Successfully invoked function-3:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke function-3:", error);
      });
  };

  const triggerFunction4 = () => {
    invoke("function-4", { foo: "bar" })
      .then((response) => {
        console.log("Successfully invoked function-4:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke function-4:", error);
      });
  };

  const triggerFunction5 = () => {
    invoke("function-5", { foo: "bar" })
      .then((response) => {
        console.log("Successfully invoked function-5:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke function-5:", error);
      });
  };

  return (
    <Stack space="space.100">
      <Box>
        <Button onClick={triggerFunction1}>Trigger function call (no payloads)</Button>
      </Box>
      <Box>
        <Button onClick={triggerFunction2}>Trigger function call (only request payload)</Button>
      </Box>
      <Box>
        <Button onClick={triggerFunction3}>Trigger function call (only response payload)</Button>
      </Box>
      <Box>
        <Button onClick={triggerFunction4}>Trigger function call (both payloads)</Button>
      </Box>
      <Box>
        <Button onClick={triggerFunction5}>Trigger function call (invocation error)</Button>
      </Box>
    </Stack>
  );
};

export default FunctionInvocationsModule;
