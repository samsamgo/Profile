import { useEffect, useRef, useState } from "react";
import { profile, video } from "../data/content";
import avatar from "../assets/yadonchis.png";
import Petals from "./Petals";
import IntroTab from "./IntroTab";
import ProjectTab from "./ProjectTab";
import LocationTab from "./LocationTab";
import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png";
import back4 from "../assets/back4.png";
import back5 from "../assets/back5.png";
import back6 from "../assets/back6.png";

const BACKGROUNDS = [back1, back2, back3, back4, back5, back6];

const TABS = [
  { key: "intro", label: "Intro" },
  { key: "project", label: "Project" },
  { key: "location", label: "Location" },
];

export default function Mypage({ onExit }) {
  const [bgIdx, setBgIdx] = useState(0);
  const [tab, setTab] = useState("intro");
  const [musicOn, setMusicOn] = useState(true);
  const [copied, setCopied] = useState(false);
  const playerRef = useRef(null);

  // v1의 배경 자동 전환 기능: 크로스페이드로 부드럽게
  useEffect(() => {
    const timer = setInterval(
      () => setBgIdx((i) => (i + 1) % BACKGROUNDS.length),
      9000
    );
    return () => clearInterval(timer);
  }, []);

  // YouTube iframe API로 백그라운드 음악 제어
  const sendCommand = (func) => {
    playerRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*"
    );
  };

  const toggleMusic = () => {
    sendCommand(musicOn ? "pauseVideo" : "playVideo");
    setMusicOn((v) => !v);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const el = document.createElement("textarea");
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="mypage">
      <div className="mypage-bg" aria-hidden="true">
        {BACKGROUNDS.map((src, i) => (
          <div
            key={src}
            className={`bg-slide ${i === bgIdx ? "show" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="bg-overlay" />
        <Petals count={10} className="petals--soft" />
      </div>

      {/* 백그라운드 음악: 화면 밖에 숨겨둔 플레이어 (헤더 ♪ 버튼으로 제어) */}
      <div className="music-dock" aria-hidden="true">
        <iframe
          ref={playerRef}
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&enablejsapi=1`}
          title="background music"
          tabIndex={-1}
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
        />
      </div>

      <div className="card">
        <header className="card-head">
          <div className="head-row">
            <button className="back-btn" onClick={onExit} aria-label="처음으로">
              ← 처음으로
            </button>
            <button
              className={`music-btn ${musicOn ? "on" : ""}`}
              onClick={toggleMusic}
              aria-label={musicOn ? "음악 일시정지" : "음악 재생"}
            >
              {musicOn ? "♪ 재생 중" : "♪ 일시정지"}
            </button>
          </div>

          <div className="identity">
            <div className="avatar-ring">
              <img src={avatar} alt="프로필 아바타" />
            </div>
            <div className="identity-text">
              <h1>
                {profile.nameKo}
                <span className="identity-en">{profile.nameEn}</span>
              </h1>
              <p className="identity-role">{profile.role}</p>
              <blockquote className="quote">
                “{profile.quote}”<cite>— {profile.quoteBy}</cite>
              </blockquote>
            </div>
            <div className="identity-links">
              <a href={profile.blog} target="_blank" rel="noreferrer">
                ✍ Blog
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                🐙 GitHub
              </a>
              <button className="email-btn" onClick={copyEmail}>
                {copied ? "✓ 복사 완료!" : "✉ Email 복사"}
              </button>
            </div>
          </div>

          <nav className="card-tabs" role="tablist" aria-label="프로필 메뉴">
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                className={`card-tab ${tab === t.key ? "on" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </header>

        {/* 탭 패널은 전부 마운트해 두고 CSS로 전환 → 지도 재로드 없음 */}
        <main className="card-body">
          <section className={`tab-panel ${tab === "intro" ? "on" : ""}`}>
            <IntroTab />
          </section>
          <section className={`tab-panel ${tab === "project" ? "on" : ""}`}>
            <ProjectTab />
          </section>
          <section className={`tab-panel ${tab === "location" ? "on" : ""}`}>
            <LocationTab active={tab === "location"} />
          </section>
        </main>
      </div>
    </div>
  );
}
