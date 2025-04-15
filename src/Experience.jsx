import { Environment } from "@react-three/drei";
import Office from "./Office";
import Effects from "./Effects";

const Experience = () => {
  return (
    <>
      <Office />

      <Effects />

      <Environment files={"/snowy_park2.hdr"} background />
    </>
  );
};

export default Experience;
