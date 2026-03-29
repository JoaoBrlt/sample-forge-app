import { invokeRemote } from "@forge/bridge";
import { Box, Button, Stack } from "@forge/react";
import React from "react";

const RemoteInvocationsModule = () => {
  const triggerRemote1 = () => {
    invokeRemote({ method: "DELETE", path: "/posts/1" })
      .then((response) => {
        console.log("Successfully invoked remote-1:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke remote-1:", error);
      });
  };

  const triggerRemote2 = () => {
    invokeRemote({ method: "GET", path: "/posts" })
      .then((response) => {
        console.log("Successfully invoked remote-2:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke remote-2:", error);
      });
  };

  const triggerRemote3 = () => {
    invokeRemote({
      method: "POST",
      path: "/posts",
      headers: { "Content-Type": "application/json" },
      body: { userId: 1, title: "foo", body: "bar" },
    })
      .then((response) => {
        console.log("Successfully invoked remote-3:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke remote-3:", error);
      });
  };

  const triggerRemote4 = () => {
    invokeRemote({
      method: "GET",
      path: "/unknown",
    })
      .then((response) => {
        console.log("Successfully invoked remote-4:", response);
      })
      .catch((error) => {
        console.error("Failed to invoke remote-4:", error);
      });
  };

  return (
    <Stack space="space.100">
      <Box>
        <Button onClick={triggerRemote1}>Trigger remote call (no payloads)</Button>
      </Box>
      <Box>
        <Button onClick={triggerRemote2}>Trigger remote call (only response payload)</Button>
      </Box>
      <Box>
        <Button onClick={triggerRemote3}>Trigger remote call (both payloads)</Button>
      </Box>
      <Box>
        <Button onClick={triggerRemote4}>Trigger remote call (invocation error)</Button>
      </Box>
    </Stack>
  );
};

export default RemoteInvocationsModule;
