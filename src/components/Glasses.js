import React, { Component } from "react";

export default class Glasses extends Component {
  state = {
    newGlasses: "./image/v7.png",
    nameGlasses: "FENDI F8750",
    descGlasses:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    priceGlasses: "80",
  };
  render() {
    const arrGlasses = [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./image/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./image/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./image/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./image/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./image/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./image/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./image/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./image/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./image/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ];
    const renderListGlasses = () => {
      let newArrGlasses = [];
      newArrGlasses = arrGlasses.map((item, index) => {
        return (
          <button
            onClick={() => {
              this.setState({
                newGlasses: item.url,
                nameGlasses: item.name,
                descGlasses: item.desc,
                priceGlasses: item.price,
              });
            }}
            className="img_right col-6"
          >
            <img src={item.url} alt="" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </button>
        );
      });
      return newArrGlasses;
    };
    return (
      <div>
        <header>
          <div className="container">
            <h2>TRY GLASSES APP ONLINE</h2>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="content_left ">
                <img src="./image/model.jpg" alt="" />
                <div className="img_left">
                  <img src={this.state.newGlasses} alt="" />
                </div>
                <div className="content_img">
                  <h3>{this.state.nameGlasses}</h3>
                  <p>{this.state.descGlasses}</p>
                </div>
              </div>
              <div className="price_glasses">
                <p>${this.state.priceGlasses}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="content_right row">{renderListGlasses()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
