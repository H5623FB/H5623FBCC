import React, { Component } from "react";

import SoftReq from "./SoftDrinks/SoftDrinks";
import BAGinBoxCordialReq from "./Bag in Box Cordial/Bag in Box Cordial";
import BottleBeerReq from "./BottleBeer/BottleBeer";
import BottleWaterReq from "./BottleWater/BottleWater";
import DraughtBeerReq from "./Draught Beer/Draught Beer";
import RedWineReq from "./RedWine/RedWine";
import RoseWineReq from "./RoseWine/RoseWine";
import SparklingWineReq from "./SparklingWine/SparklingWine";
import WhiteWineReq from "./WhiteWine/WhiteWine";
import "../../styles.css";

class RequisitionForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SoftReq className="wrapper" />
          <BottleWaterReq className="wrapper" />
          <BottleBeerReq className="wrapper" />
          <RedWineReq className="wrapper" />
          <RoseWineReq className="wrapper" />
          <WhiteWineReq className="wrapper" />
          <SparklingWineReq className="wrapper" />
          <DraughtBeerReq className="wrapper" />
          <BAGinBoxCordialReq className="wrapper" />
        </div>
      </React.Fragment>
    );
  }
}

export default RequisitionForm;
