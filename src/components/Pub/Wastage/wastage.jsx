import React, { Component } from "react";

import SoftWastage from "./SoftDrinks/SoftDrinks";
import BAGinBoxCordialWastage from "./Bag in Box Cordial/Bag in Box Cordial";
import BottleBeerWastage from "./BottleBeer/BottleBeer";
import BottleWaterWastage from "./BottleWater/BottleWater";
import DraughtBeerWastage from "./Draught Beer/Draught Beer";
import RedWineWastage from "./RedWine/RedWine";
import RoseWineWastage from "./RoseWine/RoseWine";
import SparklingWineWastage from "./SparklingWine/SparklingWine";
import WhiteWineWastage from "./WhiteWine/WhiteWine";
import LiqueursWastage from "./Liqueurs/Liqueurs";
import SpiritsWastage from "./Spirits/Spirits";
import AperitifsWastage from "./Aperitifs/Aperitifs";
import "../../styles.css";

class WastageForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SoftWastage className="wrapper" />
          <BottleWaterWastage className="wrapper" />
          <BottleBeerWastage className="wrapper" />
          <RedWineWastage className="wrapper" />
          <RoseWineWastage className="wrapper" />
          <WhiteWineWastage className="wrapper" />
          <SparklingWineWastage className="wrapper" />
          <AperitifsWastage className="wrapper" />
          <LiqueursWastage className="wrapper" />
          <SpiritsWastage className="wrapper" />
          <DraughtBeerWastage className="wrapper" />
          <BAGinBoxCordialWastage className="wrapper" />
        </div>
      </React.Fragment>
    );
  }
}

export default WastageForm;
