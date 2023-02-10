import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../Asset/2.png";
import logo2 from "../Asset/3.png";
import "animate.css/animate.min.css";

function Project() {
  return (
    <>
      <Projectdiv>
        <FirstProjectdiv>
          <logodiv>
            <img src={logo} alt="logo_img" />
            <pronamediv>프로젝트 : 아모나(AMOONA)</pronamediv>
            <proteamdiv>기간</proteamdiv>
            <prodatediv>📅2023.1.03 - 2023.1.31</prodatediv>
            <proteamdiv>코드스테이츠</proteamdiv>
            <prodatediv>👷파이널 프로젝트 (7인/4주)</prodatediv>
          </logodiv>
          <prodescritiondiv>
            <discriptdiv>설명🔎</discriptdiv>
            <discriptboxdiv>
              주변 사람들과 운동할수 있도록 운동 모임을 만들수 있는 웹
            </discriptboxdiv>
            <discriptdiv>링크🔗</discriptdiv>
            <linkdiv>
              <a
                href="http://d2zj5lc7bk5ajt.cloudfront.net/"
                title="프로젝트 배포 링크"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-paperclip fa-2x"></i>
              </a>
              <a
                href="https://github.com/codestates-seb/seb41_main_031"
                title="프로젝트 레파지토리"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.notion.so/codestates/f8ea3a2e92914268bc743c5cfbee6bab?pvs=4"
                title="프로젝트 기획서"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-sharp fa-solid fa-file-pen fa-2x"></i>
              </a>
              <a
                href="https://samsamgoo.tistory.com/167"
                title="프로젝트 회고 블로깅"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-blog fa-2x"></i>
              </a>
            </linkdiv>
            <discriptdiv>기술 스택🔨</discriptdiv>
            <discriptboxdiv>
              React, Redux, Kakao map api, React-router, Axios
            </discriptboxdiv>
            <discriptdiv>담당한 페이지🔧</discriptdiv>
            <myjob>
              <li>메인 페이지(메인, 헤더, 푸터)</li>
            </myjob>
            <myjob>
              <li>게시글 등록 페이지(위치, 종목, 날짜, 시간)</li>
            </myjob>
            <myjob>
              <li>게시글 조회 페이지(게시글의 자세한 내용 띄우기)</li>
            </myjob>
            <myjob>
              <li>지도(좌표값에 따라 위치 표시와 거리에 따라 Maplevel변환)</li>
            </myjob>
          </prodescritiondiv>
        </FirstProjectdiv>
        <SecondProjectdiv>
          <logodiv>
            <img src={logo2} alt="logo_img" />
            <pronamediv>프리 프로젝트 : 클론코딩 </pronamediv>
            <pronamediv>Stack Overflow</pronamediv>
            <proteamdiv>기간</proteamdiv>
            <prodatediv>📅2022.12.15 - 2023.01.02</prodatediv>
            <proteamdiv>코드스테이츠</proteamdiv>
            <prodatediv>👷프리 프로젝트 (6인/2주)</prodatediv>
          </logodiv>
          <prodescritiondiv>
            <discriptdiv>설명🔎</discriptdiv>
            <discriptboxdiv>Stack overflow 사이트 재현하기</discriptboxdiv>
            <discriptdiv>링크🔗</discriptdiv>
            <linkdiv>
              <a
                href="http://3.38.108.219:3000/"
                title="프리 프로젝트 배포 링크"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-paperclip fa-2x"></i>
              </a>
              <a
                href="https://github.com/codestates-seb/seb41_pre_002"
                title="프리 프로젝트 레파지토리"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.notion.so/codestates/2-71cc536afabc4960b70414acd74213ea?pvs=4"
                title="프리 프로젝트 기획서"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-sharp fa-solid fa-file-pen fa-2x"></i>
              </a>
              <a
                href="https://samsamgoo.tistory.com/151"
                title="프리 프로젝트 회고 블로깅"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-blog fa-2x"></i>
              </a>
            </linkdiv>
            <discriptdiv>기술 스택🔨</discriptdiv>
            <discriptboxdiv>
              React, Redux, Styled Component, Axios
            </discriptboxdiv>
            <discriptdiv>담당한 페이지🔧</discriptdiv>
            <myjob>
              <li>메인 페이지(푸터)</li>
            </myjob>
            <myjob>
              <li>게시글 조회 페이지(게시글 북마크, 댓글)</li>
            </myjob>
            <myjob>
              <li>마이페이지</li>
            </myjob>
          </prodescritiondiv>
        </SecondProjectdiv>
      </Projectdiv>
    </>
  );
}

export default Project;

const Projectdiv = styled.div`
  width: 90%;
  height: 60%;
  border-radius: 15px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  padding: 3% 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Jua", sans-serif;
  margin: 1% 1%;
`;

const FirstProjectdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  animation: ${({ isReqVisible }) =>
    isReqVisible ? "fadeInLeft 2s" : "fadeInLeft 2s"};
  logodiv {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      opacity: 0.8;
      border-radius: 15px;
      border: 5px solid rgba(255, 255, 255, 0.8);
      margin-top: 5%;
    }
    pronamediv {
      margin-top: 4%;
      font-size: 25px;
    }
    prodatediv {
      margin-top: 1%;
      font-size: 15px;
    }
    proteamdiv {
      margin-top: 4%;
      font-size: 20px;
    }
  }
  prodescritiondiv {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    discriptdiv {
      font-size: 20px;
      margin-top: 4%;
    }
    linkdiv {
      display: flex;
      flex-direction: row;
      a {
        display: flex;
        flex-grow: 1;
        text-decoration: none;
        i {
          color: black;
        }
      }
    }
  }
`;
const SecondProjectdiv = styled(FirstProjectdiv)`
  width: 100%;
  display: flex;
  flex-direction: row;
  animation: ${({ isReqVisible }) =>
    isReqVisible ? "fadeInLeft 2s" : "fadeInRight 2s"};
  prodescritiondiv {
    line-height: 31px;
    discriptdiv {
      font-size: 20px;
      margin-top: 6%;
      font-size: 20px;
    }
  }
`;
