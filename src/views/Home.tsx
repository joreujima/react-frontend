import React, { Component, Dispatch } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import { Layout } from "../layouts/Layout";
import Cart from "../components/Cart";
import { Product } from "../components/Product";
import { addProductToCart, CartType } from "../modules/CartModule";

import ProductJson from "./products.json";

type HomePropTypes = {
  addProductToCart: Function;
  cart: CartType;
};

class Home extends Component<HomePropTypes> {
  handleAddToCart = (item: any) => {
    this.props.addProductToCart(item);
  };

  render() {
    return (
      <Layout>
        <Row>
          <Col span={18}>
            {ProductJson.map(product => (
              <Product
                key={product.id}
                image={product.image}
                price={product.price}
                name={product.name}
                onPress={() => this.handleAddToCart(product)}
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

const mapStateToProps = (state: any) => ({
  cart: state.cart
});

const mapDispatch = { addProductToCart };

export default connect(
  mapStateToProps,
  mapDispatch
)(Home);
