import { Environment, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Office from "./Office";
import { editable as e } from "@theatre/r3f";

const Experience = () => {
  return (
    <>
      <e.group theatreKey="Model">
        <Office />
      </e.group>

      <Environment files={"/snowy_park2.hdr"} background />

      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls /> */}
    </>
  );
};

export default Experience;
