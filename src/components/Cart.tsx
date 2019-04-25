import React, { Component } from "react";
import { Card, Row, Col, Button } from "antd";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { CartType } from "../modules/CartModule";

const BigNumberTextStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: right;
`;

interface CartComponentPropTypes {
  cart: CartType;
}

class Cart extends Component<CartComponentPropTypes> {
  countTotalPrice = () => {
    const total = this.props.cart.products.reduce((total, item: any) => {
      return item.price * item.amount + total;
    }, 0);

    return this.convertToCurrency(total);
  };

  convertToCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(amount);
  };

  render() {
    return (
      <Card
        title="Selected Products"
        style={{ width: 300 }}
        extra={`${this.props.cart.products.reduce(
          (total, item: any) => total + item.amount,
          0
        )} Items`}
      >
        {this.props.cart.products.map((item: any) => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>{item.name}</span>
            <span>
              {this.convertToCurrency(item.price)}&times;{item.amount}
            </span>
          </li>
        ))}
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
            <BigNumberTextStyled>{this.countTotalPrice()}</BigNumberTextStyled>
          </Col>
        </Row>
        <Button
          type="primary"
          block
          style={{
            marginTop: "10px"
          }}
          size="large"
        >
          Confirm Purchase
        </Button>
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

const mapStateToProps = (state: any) => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(Cart);
