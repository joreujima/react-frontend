import React, { Component } from "react";
import { Button } from "antd";

export class PaymentOption extends Component {
  state = {
    options: [
      {
        name: "Cash"
      },
      {
        name: "Debit"
      },
      {
        name: "OVO",
        logo: "https://mediakonsumen.com/files/userpro/19815/5c775c8e21cc2.png"
      },
      {
        name: "GO-PAY",
        logo: "https://lelogama.go-jek.com/ramadhan2018_page_icon/go-pay3x.png"
      },
      {
        name: "DANA",
        logo: "https://refrez.com/wp-content/uploads/2018/11/dana-logo-blue.png"
      }
    ],
    selected: null
  };

  render() {
    return (
      <div>
        {this.state.options.map((item: any, index) => {
          return (
            <Button
              key={index}
              size="large"
              style={{
                marginRight: "5px",
                borderColor: index == this.state.selected ? undefined : "#fff",
                borderWidth: 5
              }}
              // type={index == this.state.selected ? "primary" : "dashed"}
              // ghost={true}
              // color={"yellow"}
              onClick={() => {
                this.setState({ selected: index });
              }}
            >
              {!item.logo ? (
                <span>{item.name}</span>
              ) : (
                <img height={20} src={item.logo} />
              )}
            </Button>
          );
        })}
      </div>
    );
  }
}
