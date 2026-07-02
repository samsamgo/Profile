import { useEffect, useRef, useState } from "react";
import { location } from "../data/content";
import "leaflet/dist/leaflet.css";

// v1의 카카오맵(키 만료로 미동작)을 Leaflet + OpenStreetMap으로 재구현.
// 숨겨진 상태에서 초기화하면 크기가 0이 되므로,
// 탭이 처음 열리는 순간에 지도를 만든다.
export default function LocationTab({ active }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [point, setPoint] = useState({
    lat: location.lat,
    lng: location.lng,
  });
  const [address, setAddress] = useState("");
  const [loadingAddr, setLoadingAddr] = useState(false);

  useEffect(() => {
    if (!active || mapRef.current) return;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [location.lat, location.lng],
        zoom: 11,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.circleMarker([location.lat, location.lng], {
        radius: 10,
        color: "#8b5cf6",
        weight: 3,
        fillColor: "#c084fc",
        fillOpacity: 0.85,
      })
        .addTo(map)
        .bindPopup(`<strong>${location.label}</strong>`)
        .openPopup();

      map.on("click", (e) => {
        marker.setLatLng(e.latlng);
        setPoint({ lat: e.latlng.lat, lng: e.latlng.lng });
      });

      // 레이아웃이 안정된 뒤 크기 재계산
      setTimeout(() => map.invalidateSize(), 80);
    })();

    return () => {
      cancelled = true;
    };
  }, [active]);

  // 컴포넌트가 완전히 사라질 때만 지도 파괴
  useEffect(
    () => () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    },
    []
  );

  // 좌표가 바뀌면 역지오코딩으로 주소 조회 (Nominatim, 키 불필요)
  useEffect(() => {
    const controller = new AbortController();
    setLoadingAddr(true);
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${point.lat}&lon=${point.lng}&accept-language=ko`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.display_name || "주소 정보 없음");
        setLoadingAddr(false);
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setAddress("주소를 불러오지 못했습니다");
          setLoadingAddr(false);
        }
      });
    return () => controller.abort();
  }, [point]);

  return (
    <div className="location-tab">
      <h2 className="panel-title">🗺 Location</h2>
      <p className="tab-desc">{location.desc}</p>

      <div ref={containerRef} className="map-frame" aria-label="위치 지도" />

      <div className="coord-panel">
        <div>
          <span className="coord-label">위도</span>
          <strong>{point.lat.toFixed(6)}</strong>
        </div>
        <div>
          <span className="coord-label">경도</span>
          <strong>{point.lng.toFixed(6)}</strong>
        </div>
        <div className="coord-address">
          <span className="coord-label">주소</span>
          <strong>{loadingAddr ? "조회 중..." : address}</strong>
        </div>
      </div>
    </div>
  );
}
