import "./inventory.css";
import React from "react";
import Product from "./Product";

function Section({ title }) {
  return (
    <div className="m-4 p-2 border">
      <h3 className="p-3 bg-light border mb-0 d-flex justify-content-between align-items-center">
        {title}...
        <button className="view-all" onClick="">
          View All..
        </button>
      </h3>
      <div className="d-flex flex-wrap align-items-center justify-content-around mt-0 ">
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="100"
          newPrice="90"
          seller="ElectroPotent-InfoTech"
        />{" "}
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="100"
          newPrice="90"
          seller="ElectroPotent-InfoTech"
        />{" "}
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="100"
          newPrice="90"
          seller="ElectroPotent-InfoTech"
        />
        <Product
          name="connector female"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="24"
          newPrice="22"
          seller="ElectroPotent-InfoTech"
        />
        
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-around mt-0 ">
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="24"
          newPrice="22"
          seller="ElectroPotent-InfoTech"
        />
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="24"
          newPrice="22"
          seller="ElectroPotent-InfoTech"
        />
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="24"
          newPrice="22"
          seller="ElectroPotent-InfoTech"
        />
        <Product
          name="Spacer 2mm Inside"
          desc="If your knees aren't green by the end of the day, you ought to
            seriously re-examine your life."
          image="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
          price="24"
          newPrice="22"
          seller="ElectroPotent-InfoTech"
        />
      </div>
    </div>
  );
}

export default Section;
