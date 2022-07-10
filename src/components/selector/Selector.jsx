import React, { useState } from "react";
import "./selector.css";
import antennaImg from "../../assets/icon-ant.png";
import eyesImg from "../../assets/icon-eye.png";
import faceImg from "../../assets/icon-face.png";
import bodyImg from "../../assets/icon-body.png";
import auraImg from "../../assets/icon-lightn.png";

const Selector = ({ ...props }) => {
  console.log({ ...props });

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
                  value={props.aura}
                  className="selector-input"
                  onChange={(e) => props.setAura(e.target.value)}
                />
                <label for="aura" className="selector-label">
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
                  id="ant"
                  name="ant"
                  className="selector-input"
                  value={props.antenna}
                  onChange={(e) => props.setAntenna(e.target.value)}
                />
                <label for="ant" className="selector-label">
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
                  value={props.hair}
                  onChange={(e) => props.setHair(e.target.value)}
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
                  value={props.face}
                  onChange={(e) => props.setFace(e.target.value)}
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
                  value={props.body}
                  onChange={(e) => props.setBody(e.target.value)}
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
