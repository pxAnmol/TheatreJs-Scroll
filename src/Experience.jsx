import { Environment } from "@react-three/drei";
import Office from "./Office";

const Experience = () => {
  return (
    <>
      <Office />
      <Environment files={"/snowy_park2.hdr"} background />
    </>
  );
};

export default Experience;
