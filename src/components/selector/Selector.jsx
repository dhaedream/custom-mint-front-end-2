import React, { useState } from "react";
import "./selector.css";
import antennaImg from "../../assets/icon-ant.png";
import eyesImg from "../../assets/icon-eye.png";
import faceImg from "../../assets/icon-face.png";
import bodyImg from "../../assets/icon-body.png";
import auraImg from "../../assets/icon-lightn.png";

const Selector = ({ ...props }) => {
  //   console.log({ ...props.customColor.aura });
  //   console.log({ ...props.customColor });

  return (
    <div className="selector">
      <h2>Customize:</h2>
      <div className="selector-container">
        <div className="selector-wrap">
          <div className="selector-object">
            <div className="selector-custom-container">
              <div className="selector-custom-wrap">
                <img
                  className="selector-img-icon"
                  src={auraImg}
                  alt="aura-icon"
                />
                <input
                  type="color"
                  id="aura"
                  name="aura"
                  defaultValue={props.aura}
                  className="selector-input"
                  onChange={(e) => props.setAuraColor(e.target.value)}
                  //   onChange={(e) => props.setCustomColors}
                />
                <label
                  for="aura"
                  className="selector-label.aura(e.target.value)"
                >
                  Aura
                </label>
              </div>
              <div className="selector-custom-wrap">
                <img
                  className="selector-img-icon"
                  src={antennaImg}
                  alt="ant-icon"
                />

                <input
                  type="color"
                  id="antenna"
                  name="antenna"
                  className="selector-input"
                  //   value={props.antenna}
                  //   onChange={(e) => props.setAntenna(e.target.value)}
                />
                <label for="antenna" className="selector-label">
                  Antenna
                </label>
              </div>
              <div className="selector-custom-wrap">
                <img
                  className="selector-img-icon"
                  src={eyesImg}
                  alt="eyes-icon"
                />
                <input
                  type="color"
                  id="hair"
                  name="hair"
                  className="selector-input"
                  value={props.hex}
                />
                <label for="hair" className="selector-label">
                  Hair
                </label>
              </div>
              <div className="selector-custom-wrap">
                <img
                  className="selector-img-icon"
                  src={faceImg}
                  alt="face-icon"
                />
                <input
                  type="color"
                  id="face"
                  name="face"
                  className="selector-input"
                />
                <label for="face" className="selector-label">
                  Face
                </label>
              </div>
              <div className="selector-custom-wrap">
                <img
                  className="selector-img-icon"
                  src={bodyImg}
                  alt="body-icon"
                />
                <input
                  type="color"
                  id="body"
                  name="body"
                  className="selector-input"
                />
                <label for="face" className="selector-label">
                  Body
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selector;
