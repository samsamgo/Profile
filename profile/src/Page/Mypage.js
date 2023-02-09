import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import yadon from "../Asset/yadonchis.png";

import Intro from "./Intro";

function Mypage() {
  const videoId = "XS-hdOnxeKQ";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
  const [background, setBackground] = useState(require("../Asset/back1.png"));
  const [active, setActive] = useState("Intro");

  const images = [
    require("../Asset/back1.png"),
    require("../Asset/back2.png"),
    require("../Asset/back3.png"),
    require("../Asset/back4.png"),
    require("../Asset/back5.png"),
    require("../Asset/back6.png"),
    // ...
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground(images[Math.floor(Math.random() * images.length)]);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Mypagediv style={{ backgroundImage: `url(${background})` }}>
      <Myprofile>
        <Intorducediv>
          <imgdiv>
            <img src={yadon} alt="imgage" />
          </imgdiv>
          <nameboxdiv>
            <namediv>Jang kyeung Uk</namediv>
            <descriptiondiv>
              You will face many defeats in life, but never let yourself be
              defeated. <writerdiv>– Maya Angelou</writerdiv>
            </descriptiondiv>
          </nameboxdiv>
          <videodiv>
            <iframe
              width="80%"
              height="auto"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </videodiv>

          <idiv>
            <a
              href="https://samsamgoo.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-blog fa-2x"></i>
            </a>
            <a
              href="https://github.com/samsamgo"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="mailto:jku2659@gmail.com">
              <i class="fa-solid fa-envelope fa-2x"></i>
            </a>
          </idiv>
        </Intorducediv>
        <Buttondiv>
          <boxdiv
            className={"Intro" === active ? "active" : ""}
            onClick={() => setActive("Intro")}
          >
            <span>Intro</span>
          </boxdiv>
          <boxdiv
            className={"Pro" === active ? "active" : ""}
            onClick={() => setActive("Pro")}
          >
            <span>Project</span>
          </boxdiv>
          <boxdiv
            className={"Video" === active ? "active" : ""}
            onClick={() => setActive("Video")}
          >
            <span>Video</span>
          </boxdiv>
          <boxdiv
            className={"Loca" === active ? "active" : ""}
            onClick={() => setActive("Loca")}
          >
            <span>Location</span>
          </boxdiv>
        </Buttondiv>
        {active === "Intro" && <Intro />}
        {active === "Pro" && <div>123123</div>}
        {active === "Video" && <div>123123</div>}
        {active === "Loca" && <div>123123</div>}
      </Myprofile>
    </Mypagediv>
  );
}

export default Mypage;

const fadeIn = keyframes` from { opacity: 0; } to { opacity: 1; }`;

const Mypagediv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${({ background }) => ` url(${background})` || "white"};
  background-size: cover;
  padding: 5% 15%;
  transition: background-image 2s ease-in-out;
  justify-content: center;
  animation: ${fadeIn} 2s ease-in-out;
  align-items: center;
`;

const Buttondiv = styled.div`
  width: 100%;
  height: 10%;
  border: none;
  display: flex;
  flex-direction: row;
  padding: 0px 3%;
  cursor: pointer;
  boxdiv {
    position: relative;
    width: 10%;
    height: 50%;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    margin: 0px 3% 0px 3%;
    text-align: center;
    span {
      font-size: 20px;
      color: white;
    }
    &:hover {
      font-weight: bold;
    }
    &.active {
      align-items: center;
      font-weight: bold;
      background-color: rgba(220, 220, 255, 0.6);
      border: 5px solid rgba(255, 255, 255, 0.8);
    }
  }
`;

const Myprofile = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  align-items: center;
`;

const Intorducediv = styled.div`
  width: 100%;
  height: auto;
  color: white;
  /* border-radius: 15px;
  border: 5px solid rgba(255, 255, 255, 0.8); */
  display: flex;
  flex-direction: row;
  imgdiv {
    margin: 3% 0px 0px 3%;
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 7px solid rgba(255, 255, 255, 0.8);
    padding: 5px 5px;
    align-items: center;
    img {
      position: absolute;
      top: 5px;
      left: 4px;
      width: 125px;
      height: 125px;
      border-radius: 50%;
    }
  }
  nameboxdiv {
    color: white;
    font-family: "Gowun Batang", serif;
    display: flex;
    flex-direction: column;
    namediv {
      font-size: 50px;
      margin: 6% 0px 0px 3%;
    }
    descriptiondiv {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      margin: 2% 0px 0px 3%;
      writerdiv {
        margin: 1% 12% 0px 0px;
        text-align: right;
        font-size: 25px;
      }
    }
  }
  videodiv {
    margin: 3% 3%;
  }

  idiv {
    width: 20%;
    margin-left: auto;
    padding: 3% 1%;
    a {
      margin: 0px 10% 0px 5%;
      i {
        color: white;
      }
    }
  }
`;
