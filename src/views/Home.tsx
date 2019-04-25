import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import { Layout } from "../layouts/Layout";
import { Cart } from "../components/Cart";
import { Product } from "../components/Product";

export class Home extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Korean Topokki",
        price: 70000,
        image:
          "https://merahputih.com/media/58/0b/1c/580b1c4a6ed0b80538d96d87671d7f35.png"
      },
      {
        id: 2,
        name: "Korean Bulgogi",
        price: 40000,
        image:
          "https://www.justonecookbook.com/wp-content/uploads/2017/06/Bulgogi-w722.jpg"
      },
      {
        id: 3,
        name: "Indonesian Spicy Bakso",
        price: 20000,
        image:
          "https://assets-pergikuliner.com/AvutnDSP68KxsJymbvf7aYZiw6k=/385x290/smart/https://assets-pergikuliner.com/uploads/image/picture/580683/picture-1496656356.jpg"
      }
    ]
  };

  render() {
    return (
      <Layout>
        {/* <h1>Hello</h1> */}
        <Row>
          <Col span={18}>
            {this.state.products.map(product => (
              <Product
                key={product.id}
                image={product.image}
                price={product.price}
                name={product.name}
              />
            ))}
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </Layout>
    );
  }
}
