import React, { Component } from "react";
import { Layout as AntdLayout } from "antd";

import { Header } from "./Header";

const { Content } = AntdLayout;
export class Layout extends Component {
  render() {
    return (
      <AntdLayout>
        <Header />
        <Content
          style={{
            padding: "20px 50px",
            height: "100vh"
          }}
        >
          {this.props.children}
        </Content>
      </AntdLayout>
    );
  }
}
