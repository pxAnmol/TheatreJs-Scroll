import { EffectComposer, Vignette, Bloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function PostProcessing() {
  return (
    <EffectComposer multisampling={4}>
      <Vignette
        offset={0.3}
        darkness={0.8}
        blendFunction={BlendFunction.NORMAL}
      />
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur
      />
    </EffectComposer>
  );
}
