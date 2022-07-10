// import React from "react";
// import { Suspense, useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import Alien from "../alien/Alien";
// import { OrbitControls } from "@react-three/drei";

// const CanvasJsx = ({ ...props }) => {
//   console.log(props.aura);
//   return (
//     <Canvas>
//       <Suspense fallback={null}>
//         <ambientLight />
//         <spotLight
//           intensity={0.9}
//           angle={0.1}
//           penumbra={1}
//           position={[10, 15, 10]}
//           castShadow
//         />
//         <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
//         <Alien auraColor={props.aura} hex={props.hex} />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default CanvasJsx;

import React from "react";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Alien from "../alien/Alien";
import { OrbitControls } from "@react-three/drei";

const CanvasJsx = ({ ...props }) => {
  // console.log({ ...props });

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <spotLight
          intensity={0.9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Alien
          hair={props.hair}
          face={props.face}
          body={props.body}
          antenna={props.antenna}
          setAura={props.setAura}
          aura={props.aura}
          hex={props.hex}
        />
      </Suspense>
    </Canvas>
  );
};

export default CanvasJsx;
