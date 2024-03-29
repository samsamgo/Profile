import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Map = () => {
  const [address, setAddress] = useState([]);
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(36.7722496, 126.451712);
  const [lat, setlat] = useState(36.7722496);
  const [lng, setlng] = useState(126.451712);
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
  };

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const imageSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const positions = [
      {
        map: map,
        position: new kakao.maps.LatLng(33.450701, 126.570667),
        title: address.address,
      },
      {
        map: map,
        position: new kakao.maps.LatLng(address.lat, address.lng),
        title: address.address,
      },
    ];

    const addressesWithoutFirst = positions.slice(1);
    // infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
    // 커스텀 오버레이에 표출될 내용
    const content = `
      <div class="customoverlay">
        <span style="border 2px soled black">내위치</span>
      </div>`;

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map,
      position,
      content,
    });

    // 마커가 지도 위에 표시되도록 설정
    addressesWithoutFirst.map((item) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: item.position,
        title: item.item,
      });
      marker.setMap(map);
      const infoWindow = new kakao.maps.InfoWindow({
        content: `<div style="width:200px; text-align :center; color: black; font-size: 7px;">${address.address}</div>`,
      });
      infoWindow.open(map, marker);
    });

    kakao.maps.event.addListener(map, "click", (event) => {
      setlat(event.latLng.getLat());
      setlng(event.latLng.getLng());
    });
  }, [address]);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress({
          address: result[0].address.address_name,
          lat: `${lat}`,
          lng: `${lng}`,
        });
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, [lng]);

  return (
    <>
      <div
        id="map"
        ref={mapContainer}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>
    </>
  );
};

export default Map;
