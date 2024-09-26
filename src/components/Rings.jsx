import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";

const Rings = ({ position }) => {
  // メッシュへの参照を格納する配列
  const refList = useRef([]);

  // 各リングのテクスチャを読み込む
  const texture = useTexture("/textures/rings.png");

  // useCallbackを使ってgetRef関数をメモ化
  // この関数は、メッシュがレンダーされた時に呼び出され、refListにメッシュへの参照を追加する
  const getRef = useCallback((mesh) => {
    // meshが存在し、かつrefListにまだ含まれていない場合のみ追加する
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // GSAPを使ってアニメーションを定義
  useGSAP(
    () => {
      // refListにメッシュへの参照が格納されていることを確認
      if (refList.current.length === 0) return;

      // 各リングの位置を設定
      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      // GSAPのタイムラインを作成
      gsap
        .timeline({
          // 無限に繰り返す
          repeat: -1,
          // 繰り返し間の遅延
          repeatDelay: 0.5,
        })
        // 各リングの回転アニメーションを定義
        .to(
          refList.current.map((r) => r.rotation),
          {
            // y軸を中心に2π回転（360度）
            y: `+=${Math.PI * 2}`,
            // x軸を中心に-2π回転（-360度）
            x: `-=${Math.PI * 2}`,
            // アニメーションの duration
            duration: 2.5,
            // staggerを使って各リングのアニメーション開始時間をずらす
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    // positionが変更されたらアニメーションを再実行
    {
      dependencies: position,
    }
  );

  // リングをレンダリング
  return (
    <Center>
      <group scale={0.5}>
        {/* 4つのリングを生成 */}
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            {/* トーラス形状を生成 */}
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            {/* マテリアルを設定 */}
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
