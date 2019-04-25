import React, { Component } from "react";
import { Card, Row, Col, Button } from "antd";
import styled from "@emotion/styled";

const BigNumberTextStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: right;
`;
export class Cart extends Component {
  render() {
    return (
      <Card title="Selected Products" style={{ width: 300 }} extra={"0 Items"}>
        <hr />
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Col span={10}>Total</Col>
          <Col span={14}>
            <BigNumberTextStyled>Rp 0</BigNumberTextStyled>
          </Col>
        </Row>
        <Button
          type="danger"
          block
          style={{
            marginTop: "10px"
          }}
          size="large"
        >
          Clear Items
        </Button>
      </Card>
    );
  }
}
