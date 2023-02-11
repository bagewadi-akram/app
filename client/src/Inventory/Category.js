import React from 'react'
import './inventory.css'

function Category({title}) {
  return (
    <div className="m-4 p-2 border">
      <h3 className="p-3 border mb-0 d-flex justify-content-between align-items-center bg-light">
        {title}....
        <button className="view-all" onClick="">
          View All..
        </button>
      </h3>
      <div className="d-flex flex-wrap align-items-center justify-content-around p-5 ">
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://www.gadgetronicx.com/wp-content/uploads/2020/05/screw-terminal-e1589526629604.png"
              alt="Connectors"
            />
          </div>
          <div className="category-info">
            <h5>Connectors</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://i.pinimg.com/originals/92/f0/3b/92f03b1b1f4c67f10ef2044207232f20.jpg"
              alt="Registor"
            />
          </div>
          <div className="category-info">
            <h5>Registor</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://i.ebayimg.com/images/g/82wAAOSwYVBiXmxR/s-l500.jpg"
              alt="spacer"
            />
          </div>
          <div className="category-info">
            <h5>Spacer</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://components101.com/sites/default/files/components/Diodes%20Image.jpg"
              alt="Diode"
            />
          </div>
          <div className="category-info">
            <h5>Diode</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://www.carlingtech.com/sites/default/files/switches_rockers.jpg"
              alt="switches"
            />
          </div>
          <div className="category-info">
            <h5>Switches</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://robu.in/wp-content/uploads/2021/05/1-set-LED-Strips-and-LED-Controller-with-Y-cable-1-314x252.jpg"
              alt="LED"
            />
          </div>
          <div className="category-info">
            <h5>LED</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://robu.in/wp-content/uploads/2018/01/header-20x2-pins-male-314x252.jpg"
              alt=" PCB Header"
            />
          </div>
          <div className="category-info">
            <h5>PCB Header</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://robu.in/wp-content/uploads/2021/12/download-1-314x252.jpg"
              alt="Inductor"
            />
          </div>
          <div className="category-info">
            <h5>Inductor</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://robu.in/wp-content/uploads/2019/06/0.5mm-Pitch-FPC-Ribbon-Flexible-Flat-Cable-100mm-A-Type-5-pcs.jpeg"
              alt="FFC Cables"
            />
          </div>
          <div className="category-info">
            <h5>FFC Cables</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
        <div className="category-container ">
          <div className="category-img">
            <img
              src="https://robu.in/wp-content/uploads/2018/02/robu-1-33.jpg"
              alt="Adaptors"
            />
          </div>
          <div className="category-info">
            <h5>Adaptors</h5>
            <p>Wri te the cate gory Des cpri ption here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category