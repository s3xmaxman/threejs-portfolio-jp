import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF("/models/cube.glb");

  const texture = useTexture("/textures/cube.png");

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  // GSAPを使ってアニメーションを適用
  useGSAP(() => {
    // タイムラインを作成
    gsap
      .timeline({
        // 無限に繰り返す
        repeat: -1,
        // 繰り返し間の遅延時間
        repeatDelay: 0.5,
      })
      // cubeRefの回転アニメーションを定義
      .to(cubeRef.current.rotation, {
        // y軸回転。ホバー時は2ラジアン、非ホバー時は360度回転
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        // x軸回転。ホバー時は2ラジアン、非ホバー時は-360度回転
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        // アニメーション時間
        duration: 2.5,
      });
  });

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef} // meshへの参照
          castShadow // 影を落とす
          receiveShadow // 影を受ける
          geometry={nodes.Cube.geometry} // ジオメトリ
          material={nodes.Cube.material} // マテリアル
          // マウスホバー開始時のイベントハンドラ
          onPointerEnter={() => setHovered(true)}
          // マウスホバー終了時のイベントハンドラ（追加）
          onPointerLeave={() => setHovered(false)} // ホバー状態を解除
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/cube.glb");

export default Cube;
