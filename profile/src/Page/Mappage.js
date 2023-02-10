import React from "react";
import "animate.css/animate.min.css";
import styled from "styled-components";
import Map from "../Component/Map";

function Mappage() {
  return (
    <>
      <Mapdiv>
        <Map />
      </Mapdiv>
    </>
  );
}

export default Mappage;

const Mapdiv = styled.div`
  width: 80%;
  height: 60%;
  border-radius: 15px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  margin: 1% 1%;
  animation: ${({ isReqVisible }) =>
    isReqVisible ? "fadeInLeft 2s" : "fadeIn 2s"};
`;
