import React, { Component } from "react";
import SoftDrinks from "./SoftDrinks/SoftDrinks";
import Aperitifs from "./Aperitifs/Aperitifs";
import BAGinBoxCordial from "./Bag in Box Cordial/Bag in Box Cordial";
import BottleBeer from "./BottleBeer/BottleBeer";
import BottleWater from "./BottleWater/BottleWater";
import DraughtBeer from "./Draught Beer/Draught Beer";
import Liqueurs from "./Liqueurs/Liqueurs";
import RedWine from "./RedWine/RedWine";
import RoseWine from "./RoseWine/RoseWine";
import SparklingWine from "./SparklingWine/SparklingWine";
import Spirits from "./Spirits/Spirits";
import WhiteWine from "./WhiteWine/WhiteWine";
import PrintClosingForm from "./print";

import "../../styles.css";

class ClosingForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <SoftDrinks className="wrapper" />
          <BottleWater className="wrapper" />
          <BottleBeer className="wrapper" />
          <RedWine className="wrapper" />
          <RoseWine className="wrapper" />
          <WhiteWine className="wrapper" />
          <SparklingWine className="wrapper" />
          <Aperitifs className="wrapper" />
          <Spirits className="wrapper" />
          <Liqueurs className="wrapper" />
          <DraughtBeer className="wrapper" />
          <BAGinBoxCordial className="wrapper" />
          <PrintClosingForm />
        </div>
      </React.Fragment>
    );
  }
}

export default ClosingForm;
