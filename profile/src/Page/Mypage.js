import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import yadon from "../Asset/yadonchis.png";

import Intro from "./Intro";
import Project from "./Project";
import Mappage from "./Mappage";

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
              <i class="fa-solid fa-blog">blog</i>
            </a>
            <a
              href="https://github.com/samsamgo"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-2x">github</i>
            </a>
            <a href="mailto:jku2659@gmail.com">
              <i class="fa-solid fa-envelope fa-2x">email</i>
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
        {active === "Pro" && <Project />}
        {active === "Video" && <div></div>}
        {active === "Loca" && <Mappage />}
      </Myprofile>
    </Mypagediv>
  );
}

export default Mypage;

const Mypagediv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  background-image: ${({ background }) => ` url(${background})` || "white"};
  background-size: cover;
  padding: 5% 13%;
  transition: background-image 4s ease-in-out 1s;
  justify-content: center;
  align-items: center;
`;

const Buttondiv = styled.div`
  width: 100%;
  height: 2.5rem;
  border: none;
  display: flex;
  flex-direction: row;
  padding: 0px 3%;
  cursor: pointer;
  margin: 1% 0px;
  boxdiv {
    width: 10rem;
    height: 100%;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    margin: 0px 3% 0px 3%;
    text-align: center;
    padding-top: 0.3rem;
    span {
      font-size: 1rem;
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
  position: relative;

  imgdiv {
    margin: 3% 0px 3% 3%;
    position: relative;
    width: 135px;
    height: 135px;
    border-radius: 50%;
    border: 7px solid rgba(255, 255, 255, 0.8);
    padding: 5px 5px;
    img {
      position: absolute;
      top: 7%;
      left: 7%;
      width: 105px;
      height: 105px;
      border-radius: 50%;
    }
  }
  nameboxdiv {
    width: 40%;
    font-family: "Gowun Batang", serif;
    display: flex;
    flex-direction: column;
    namediv {
      font-size: 3rem;
      margin: 6% 0px 0px 4%;
    }
    descriptiondiv {
      width: 90%;
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      margin: 2% 0px 0px 4%;
      padding: 0px 0px 0px 6%;
      writerdiv {
        margin: 1% 20% 0px 0px;
        text-align: right;
        font-size: 0.7rem;
      }
    }
  }
  videodiv {
    width: auto;
    height: 80%;
    iframe {
      width: auto;
      height: 100%;
    }

    margin: 3% 3% 0px 3%;
  }
  idiv {
    position: absolute;
    right: 5%;
    top: 3%;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3% 0px;
    a {
      margin: 5% 0px;
      i {
        color: white;
        font-size: 1.2rem;
      }
    }
  }
`;
