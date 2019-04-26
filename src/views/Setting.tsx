import React, { Component } from "react";
import { Form, Input, Col, Row, Layout as AntdLayout, Button } from "antd";

import { Layout } from "../layouts/Layout";

class Setting extends Component {
  render() {
    const formItemLayout = {
      // labelCol: {
      //   xs: { span: 24 },
      //   sm: { span: 8 }
      // },
      // wrapperCol: {
      //   xs: { span: 24 },
      //   sm: { span: 16 }
      // }
    };

    return (
      <div>
        <h1>Setting</h1>
        <Row>
          <Col span={12}>
            <AntdLayout.Content
              style={{
                background: "#fff",
                padding: 24,
                marginBottom: 16
              }}
            >
              <Row>
                <Col span={12}>
                  <Button block size="large">
                    Products Setting
                  </Button>
                </Col>
              </Row>
            </AntdLayout.Content>
            <AntdLayout.Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0
              }}
            >
              <Form {...formItemLayout}>
                <legend>Cashier Setting</legend>
                <Form.Item label="E-mail">
                  <Input placeholder="Input Your Email" />
                </Form.Item>
                {/* <Form.Item> */}
                <Button type="primary">Save</Button>
                {/* </Form.Item> */}
              </Form>
            </AntdLayout.Content>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Setting;
