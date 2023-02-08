import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Mainpage() {
  return (
    <>
      <Maindiv>
        <Namediv>
          <div>Front - end</div>
          <div>개발자</div>
          <div>장경욱입니다.</div>

          <Link to="/mypage/">
            <Buttondiv>
              <clickdiv>Click</clickdiv>
            </Buttondiv>
          </Link>
        </Namediv>
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
  background-image: url("https://blog.kakaocdn.net/dn/J44vH/btrHDPbdBUF/GueWl38q2JsflckrNeXqnK/img.gif");
  background-size: cover;
  color: white;
  align-items: center;
  padding: 10% 10%;
`;

const Namediv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  animation: appearance 6s forwards;
  text-decoration: none;
  div {
    font-family: "Gowun Batang", serif;
    font-size: 80px;
  }
  @keyframes appearance {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Buttondiv = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px lightgray;
  border-style: solid dashed;
  margin: 50px 0px 0px 0px;
  outline: none;
  cursor: pointer;
  animation: showHide 2s linear infinite;
  @keyframes showHide {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  clickdiv {
    font-size: 30px;
    position: absolute;
    color: white;
    top: 25%;
    left: 14%;
  }
  :hover {
    animation: pulse 2s infinite;
  }
`;
