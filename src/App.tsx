import React, { Component } from "react";
import styled from "@emotion/styled";
import { Center } from "./components/Center";

const StyledInput = styled.input`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 24px;
`;

export class App extends Component {
  render() {
    return (
      <Center>
        <div style={{ height: "100vh" }}>
          <StyledInput placeholder="Add your todos" />
        </div>
      </Center>
    );
  }
}
