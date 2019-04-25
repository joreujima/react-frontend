import React, { Component } from "react";
import { Modal, Table, Button } from "antd";
import { CartProductItem } from "../modules/CartModule";
import { PaymentOption } from "./PaymentOption";

type TransactionDetailModalPropsType = {
  visible: boolean;
  products: Array<CartProductItem>;
};
export default class TransactionDetailModal extends Component<
  TransactionDetailModalPropsType
> {
  countTotalPrice = () => {
    const total = this.props.products.reduce((total, item: any) => {
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
      <Modal
        title="Transaction"
        visible={this.props.visible}
        width={720}
        okText="Print"
        // onOk={this.handleOk}
        // onCancel={this.handleCancel}
      >
        <Table
          dataSource={this.props.products}
          pagination={false}
          footer={() => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span style={{ fontWeight: "bold" }}>TOTAL</span>
              <span style={{ fontSize: 18, fontWeight: "bold" }}>
                {this.countTotalPrice()}
              </span>
            </div>
          )}
        >
          <Table.Column title="Product Name" dataIndex={"name"} />
          <Table.Column title="QTY" dataIndex={"amount"} />
          <Table.Column
            title="Price"
            dataIndex={"price"}
            render={price => <span>{this.convertToCurrency(price)}</span>}
          />
          <Table.Column
            title="Total"
            dataIndex={"price"}
            align="right"
            key={"price-total"}
            render={(price, product: any) => (
              <span>{this.convertToCurrency(price * product.amount)}</span>
            )}
          />
        </Table>
        <div style={{ margin: "20px 0 5px 0" }}>Choose Payment Options:</div>
        <PaymentOption />
      </Modal>
    );
  }
}
