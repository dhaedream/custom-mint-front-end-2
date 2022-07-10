// import React, { useState } from "react";
// import "./selector.css";
// import antennaImg from "../../assets/icon-ant.png";
// import eyesImg from "../../assets/icon-eye.png";
// import faceImg from "../../assets/icon-face.png";
// import bodyImg from "../../assets/icon-body.png";
// import auraImg from "../../assets/icon-lightn.png";

// const Selector = ({ ...props }) => {
//   //   console.log({ ...props.customColor.aura });
//   //   console.log({ ...props.customColor });

//   return (
//     <div className="selector">
//       <h2>Customize:</h2>
//       <div className="selector-container">
//         <div className="selector-wrap">
//           <div className="selector-object">
//             <div className="selector-custom-container">
//               <div className="selector-custom-wrap">
//                 <img
//                   className="selector-img-icon"
//                   src={auraImg}
//                   alt="aura-icon"
//                 />
//                 <input
//                   type="color"
//                   id="aura"
//                   name="aura"
//                   defaultValue={props.aura}
//                   className="selector-input"
//                   onChange={(e) => props.setAuraColors.aura(e.target.value)}
//                   //   onChange={(e) => props.setCustomColors}
//                 />
//                 <label
//                   for="aura"
//                   className="selector-label.aura(e.target.value)"
//                 >
//                   Aura
//                 </label>
//               </div>
//               <div className="selector-custom-wrap">
//                 <img
//                   className="selector-img-icon"
//                   src={antennaImg}
//                   alt="ant-icon"
//                 />

//                 <input
//                   type="color"
//                   id="antenna"
//                   name="antenna"
//                   className="selector-input"
//                   //   value={props.antenna}
//                   //   onChange={(e) => props.setAntenna(e.target.value)}
//                 />
//                 <label for="antenna" className="selector-label">
//                   Antenna
//                 </label>
//               </div>
//               <div className="selector-custom-wrap">
//                 <img
//                   className="selector-img-icon"
//                   src={eyesImg}
//                   alt="eyes-icon"
//                 />
//                 <input
//                   type="color"
//                   id="hair"
//                   name="hair"
//                   className="selector-input"
//                   value={props.hex}
//                 />
//                 <label for="hair" className="selector-label">
//                   Hair
//                 </label>
//               </div>
//               <div className="selector-custom-wrap">
//                 <img
//                   className="selector-img-icon"
//                   src={faceImg}
//                   alt="face-icon"
//                 />
//                 <input
//                   type="color"
//                   id="face"
//                   name="face"
//                   className="selector-input"
//                 />
//                 <label for="face" className="selector-label">
//                   Face
//                 </label>
//               </div>
//               <div className="selector-custom-wrap">
//                 <img
//                   className="selector-img-icon"
//                   src={bodyImg}
//                   alt="body-icon"
//                 />
//                 <input
//                   type="color"
//                   id="body"
//                   name="body"
//                   className="selector-input"
//                 />
//                 <label for="face" className="selector-label">
//                   Body
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Selector;

import React, { useState } from "react";
import "./selector.css";
import antennaImg from "../../assets/icon-ant.png";
import eyesImg from "../../assets/icon-eye.png";
import faceImg from "../../assets/icon-face.png";
import bodyImg from "../../assets/icon-body.png";
import auraImg from "../../assets/icon-lightn.png";

const Selector = ({ ...props }) => {
  console.log({ ...props });
  //   const [customColors, setCustomColors] = useState({
  //     aura: "#32a852",
  //     antenna: "#32a852",
  //     hair: "#32a852",
  //     face: "#32a852",
  //     body: "#32a852",
  //     hex: "ffffff",
  //   });
  //   const [auraState, setAuraState] = useState("#ffffff");

  //   const [aura, setAura] = useState("#32a852");
  //   console.log(aura, setAura);
  // const setAura;
  // const [antenna, setAntenna ] = useState('#ffffff')
  // const [hair, setHair ] = useState('#ffffff')
  // const [face, setFacea ] = useState('#ffffff')
  // const [body, setBody ] = useState('#ffffff')
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
          {/* <div className="selector-custom-wrap">
            <label for="face">Face</label>
            <input type="color" id="face" name="face" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Selector;
