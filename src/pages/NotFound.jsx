import React from "react";
import { Heading } from "../components/Heading/Heading";
export const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading> Sorry, page not Found! </Heading>
    </div>
  );
};
