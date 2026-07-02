import { useMemo } from "react";

// 벚꽃잎이 흩날리는 배경 파티클
export default function Petals({ count = 14, className = "" }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 8 + Math.random() * 9,
        delay: `-${Math.random() * 14}s`,
        duration: `${9 + Math.random() * 9}s`,
        opacity: 0.45 + Math.random() * 0.45,
      })),
    [count]
  );

  return (
    <div className={`petals ${className}`} aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
