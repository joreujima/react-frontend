import React, { Component } from "react";
import { Layout as AntdLayout, Menu } from "antd";
import styled from "@emotion/styled";

import Logo from "../assets/logo.png";

const { Header: AntdHeader } = AntdLayout;

const LogoStyled = styled.div`
  width: 40px;
  height: 40px;
  background: url(${Logo});
  background-size: contain;
  /* justify-content:  */
`;

export const Header = () => (
  <AntdHeader
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}
  >
    <LogoStyled />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">POS</Menu.Item>
      <Menu.Item key="2">Profile</Menu.Item>
      <Menu.Item key="3" disabled>
        Current Balance: <b>Rp 250.000.000</b>
      </Menu.Item>
    </Menu>
  </AntdHeader>
);
