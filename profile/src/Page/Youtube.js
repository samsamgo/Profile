import React, { useRef } from "react";
import styled from "styled-components";

function Mainpage() {
  const videoRef = useRef(null);
  return (
    <>
      <Maindiv>
        <div
          style={{
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <iframe
            ref={videoRef}
            title="Lofi Hip Hop Beats"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r0z8pE9Ix9M?start=7570&autoplay=1&mute=1&loop=1&playlist=r0z8pE9Ix9M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </Maindiv>
    </>
  );
}

export default Mainpage;

const Maindiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: aqua;
`;
