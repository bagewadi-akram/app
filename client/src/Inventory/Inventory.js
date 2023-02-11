import "./inventory.css";

import React from "react";
import Category from "./Category";
import Section from "./Section";
import HeroSlider from "./HeroSlider";
import FloatingProduct from "./FloatingProduct";

function Inventory() {

  return (
    <div className=" inventory d-flex flex-column justify-content-center algin-items-center">
      <HeroSlider />
      <Category title="Product category" />
      <Section title="Featured Products" />
      <Section title="Best Seller Products" />
      <FloatingProduct />
    </div>
  );
}

export default Inventory;
