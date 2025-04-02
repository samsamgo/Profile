import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  const [address, setAddress] = useState({});
  const [lat, setLat] = useState(36.7722496);
  const [lng, setLng] = useState(126.451712);
  const [isLoading, setIsLoading] = useState(true); // ✅ 로딩 상태 추가
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.warn("Kakao Maps SDK is not loaded.");
      setIsLoading(false); // 실패로 간주
      return;
    }

    const kakao = window.kakao;

    const position = new kakao.maps.LatLng(lat, lng);
    const mapOptions = {
      center: position,
      level: 8,
    };

    const map = new kakao.maps.Map(mapContainer.current, mapOptions);

    kakao.maps.event.addListener(map, "click", (event) => {
      setLat(event.latLng.getLat());
      setLng(event.latLng.getLng());
    });

    const marker = new kakao.maps.Marker({
      map: map,
      position: position,
    });

    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);
    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddress({
          address: result[0].address.address_name,
          lat,
          lng,
        });

        const infoWindow = new kakao.maps.InfoWindow({
          content: `<div style="width:200px; text-align:center; color:black; font-size:12px;">${result[0].address.address_name}</div>`,
        });
        infoWindow.open(map, marker);
        setIsLoading(false); // ✅ 로딩 완료
      } else {
        setIsLoading(false); // 실패했어도 로딩 종료
      }
    });
  }, [lat, lng]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          🗺️ 지도를 불러오는 중입니다...
        </div>
      )}
      <div
        id="map"
        ref={mapContainer}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default Map;
