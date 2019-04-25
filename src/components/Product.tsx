import React, { Component } from "react";
import { Col, Card } from "antd";

type ProductProps = {
  name: string;
  price: number;
  image: string;
  onPress: Function;
};

export class Product extends Component<ProductProps> {
  convertCurrency = (amount: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(amount);
  };
  render() {
    return (
      <Col span={6}>
        <Card
          hoverable
          style={{ width: "200px" }}
          onClick={() => {
            this.props.onPress();
          }}
          cover={
            <div
              style={{
                width: "198px",
                height: 200,
                background: `url('${this.props.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          }
        >
          <Card.Meta
            title={this.props.name}
            description={this.convertCurrency(this.props.price)}
          />
        </Card>
      </Col>
    );
  }
}
