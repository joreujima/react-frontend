import React, { Component } from "react";
import { Card, Row, Col, Button, Modal, message, Table } from "antd";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { CartType, clearAllProducts } from "../modules/CartModule";
import TransactionDetailModal from "./TransactionDetailModal";

const BigNumberTextStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: right;
`;

interface CartComponentPropTypes {
  cart: CartType;
  clearAllProducts: Function;
}

class Cart extends Component<CartComponentPropTypes> {
  state = {
    isLoading: false,
    visible: false
  };

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

  handleClearAllProducts = () => {
    Modal.confirm({
      title: "Are you sure you want to clear all the products?",

      okText: "Yes",
      okType: "danger",

      cancelText: "No",
      onOk: () => {
        this.props.clearAllProducts();
      },
      onCancel() {}
    });
  };

  handleConfirmPurchase = () => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        visible: true
      });
    }, 1000);
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
        {this.props.cart.products.map((item: any, index: number) => (
          <li
            key={index}
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
        {this.props.cart.products.length > 0 && (
          <Button
            type="primary"
            block
            style={{
              marginTop: "10px"
            }}
            size="large"
            loading={this.state.isLoading}
            onClick={() => this.handleConfirmPurchase()}
          >
            Confirm Purchase
          </Button>
        )}
        {this.props.cart.products.length > 0 && (
          <Button
            type="danger"
            block
            style={{
              marginTop: "10px"
            }}
            size="large"
            disabled={this.state.isLoading}
            onClick={() => this.handleClearAllProducts()}
          >
            Clear Items
          </Button>
        )}

        <TransactionDetailModal
          visible={this.state.visible}
          products={this.props.cart.products}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { cart: state.cart };
};

const mapActionToProps = { clearAllProducts };

export default connect(
  mapStateToProps,
  mapActionToProps
)(Cart);
