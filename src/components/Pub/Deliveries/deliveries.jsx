import React, { Component } from "react";

import SoftDel from "./SoftDrinks/SoftDrinks";
import BAGinBoxCordialDel from "./Bag in Box Cordial/Bag in Box Cordial";
import BottleBeerDel from "./BottleBeer/BottleBeer";
import BottleWaterDel from "./BottleWater/BottleWater";
import DraughtBeerDel from "./Draught Beer/Draught Beer";
import RedWineDel from "./RedWine/RedWine";
import RoseWineDel from "./RoseWine/RoseWine";
import SparklingWineDel from "./SparklingWine/SparklingWine";
import WhiteWineDel from "./WhiteWine/WhiteWine";
import "../../styles.css";

class PubDeliveriesForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SoftDel className="wrapper" />
          <BottleWaterDel className="wrapper" />
          <BottleBeerDel className="wrapper" />
          <RedWineDel className="wrapper" />
          <RoseWineDel className="wrapper" />
          <WhiteWineDel className="wrapper" />
          <SparklingWineDel className="wrapper" />
          <DraughtBeerDel className="wrapper" />
          <BAGinBoxCordialDel className="wrapper" />
        </div>
      </React.Fragment>
    );
  }
}

export default PubDeliveriesForm;
