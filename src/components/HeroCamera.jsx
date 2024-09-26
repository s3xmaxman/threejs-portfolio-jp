import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();
  // useFrameフックを使って、各フレームでカメラの位置と回転を更新します。
  useFrame((state, delta) => {
    // カメラの位置をスムーズに[0, 0, 20]に移動します。
    // damp3は、目標値へのスムーズな遷移を実現するための関数です。
    // 第3引数は遷移の速度、第4引数はデルタ時間です。
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // モバイル端末以外の場合、ポインターの位置に基づいてカメラの回転を更新します。
    if (!isMobile) {
      // ポインターのy座標に基づいてx軸周りの回転を更新します。
      // ポインターのx座標に基づいてy軸周りの回転を更新します。
      // dampEは、目標値へのスムーズな遷移を実現するための関数です。
      // 第3引数は遷移の速度、第4引数はデルタ時間です。
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
