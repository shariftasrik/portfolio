import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Bounds } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

function Robot() {
  const model = useGLTF("/models/flying_robot.glb");
  return <primitive object={model.scene} scale={1.2} position={[0, -0.8, 0]} />;
}

export default function Hero3D() {
  return (
    <div className="w-full h-full opacity-95">
      <Canvas camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} />

          <Bounds fit clip observe margin={1.2}>
            <Robot />
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
}
