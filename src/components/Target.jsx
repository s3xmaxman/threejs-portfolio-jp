import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  // GSAPを使ってアニメーションを適用
  useGSAP(() => {
    // ターゲットのy座標を0.5単位で上下に動かすアニメーション
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5, // y座標を0.5加算
      duration: 1.5, // アニメーション時間1.5秒
      repeat: -1, // 無限に繰り返す
      yoyo: true, // 往復アニメーション
    });
  });

  // ターゲットモデルをレンダリング
  return (
    <mesh
      ref={targetRef} // ターゲットへの参照を割り当てる
      {...props} // 親コンポーネントから渡されたプロパティを適用
      rotation={[0, Math.PI / 5, 0]} // y軸を中心に回転させる
      scale={1.5} // スケールを1.5倍にする
    >
      <primitive object={scene} />{" "}
      {/* 読み込んだGLTFシーンをプリミティブとしてレンダリング */}
    </mesh>
  );
};

export default Target;
