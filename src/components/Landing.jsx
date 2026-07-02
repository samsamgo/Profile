import { profile } from "../data/content";
import Petals from "./Petals";
import landingBg from "../assets/back3.png";

export default function Landing({ onEnter, leaving }) {
  return (
    <div className={`landing ${leaving ? "landing--leaving" : ""}`}>
      <div className="landing-bg" aria-hidden="true">
        <div
          className="landing-photo"
          style={{ backgroundImage: `url(${landingBg})` }}
        />
        <div className="landing-tint" />
        <Petals count={18} />
      </div>

      <div className="landing-content">
        <p className="landing-eyebrow">ようこそ · WELCOME</p>
        <h1 className="landing-title">
          <span className="landing-role">Front-end 개발자</span>
          <span className="landing-name">{profile.nameKo}입니다</span>
        </h1>

        <button className="enter-btn" onClick={onEnter}>
          입장하기
          <span className="enter-arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
