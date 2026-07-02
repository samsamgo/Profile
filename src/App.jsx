import { useState } from "react";
import Landing from "./components/Landing";
import Mypage from "./components/Mypage";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // 랜딩 → 마이페이지 전환: 페이드아웃 후 화면 교체
  const enter = () => {
    setLeaving(true);
    setTimeout(() => setEntered(true), 650);
  };

  return entered ? (
    <Mypage onExit={() => (setEntered(false), setLeaving(false))} />
  ) : (
    <Landing onEnter={enter} leaving={leaving} />
  );
}
