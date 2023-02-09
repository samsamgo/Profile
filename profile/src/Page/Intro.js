import React, { useState } from "react";
import "animate.css/animate.min.css";
import styled, { keyframes } from "styled-components";

function Intor() {
  const [active, setActive] = useState("소개글");

  return (
    <>
      <Introdiv>
        <Buttondiv>
          <boxdiv
            className={"소개글" === active ? "active" : ""}
            onClick={() => setActive("소개글")}
          >
            <span>소개</span>
          </boxdiv>
          <boxdiv
            className={"가치" === active ? "active" : ""}
            onClick={() => setActive("가치")}
          >
            <span>가치</span>
          </boxdiv>
          <boxdiv
            className={"교육" === active ? "active" : ""}
            onClick={() => setActive("교육")}
          >
            <span>교육</span>
          </boxdiv>
        </Buttondiv>
        <ScrollContainer>
          {active === "소개글" && (
            <pofilestackdiv isReqVisible={active === "소개글"}>
              <profilediv>
                <namediv>이름 : 장경욱</namediv>
                <agediv>나이 : 2003.11.19 (21세)</agediv>
                <phonediv>핸드폰 : 010-7272-6903</phonediv>
                <emaildiv>이메일 : jku2659@gmail.com</emaildiv>
                <schooldiv>
                  학교 : 동아마이스터 고등학교(전기.전자 제어과)
                </schooldiv>
              </profilediv>
              <stackdiv>
                <stackdetail>
                  <sanmediv>🤖프로그래밍 언어 </sanmediv>
                  <sskilldiv>Javascript, HTML, CSS, Python, Ruby</sskilldiv>
                  <sanmediv>🔨프레임워크 & 라이브러리 & 번들러</sanmediv>
                  <sskilldiv>React, Redux, Express, Webpack</sskilldiv>
                  <sanmediv>💻서버 </sanmediv>
                  <sskilldiv>Json-server, GraphQL </sskilldiv>
                  <sanmediv>🏹Others </sanmediv>
                  <sskilldiv>
                    Git, AWS(EC2, RDS S3), Postman, Slack, Notion, Figma
                  </sskilldiv>
                </stackdetail>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=samsamgo&theme=dracula&exclude_repo=Computer-Science-Engineering,clone-web-scrapper&hide=Procfile&layout=compact&langs_count=8" />
              </stackdiv>
            </pofilestackdiv>
          )}
          {active === "가치" && (
            <contentdiv isReqVisible={active === "가치"}>
              <div1>
                개발자의 가치는 사용자의 만족도의 의해 정해짐을 정확히 인지하고
                있으며 여러사람의 관점을 항상 생각하고 세세한 부분까지도
                피드백을 받는 것을 선호합니다.
              </div1>
              <div1>
                현재의 문제뿐 아니라 미래의 생길 문제들까지 고려해가며 책임감을
                느끼고 주도적으로 개발하는 것을 선호하고 있습니다.
              </div1>
              <div1>
                개인 간의 역량 차이가 팀의 협력에 미치는 나쁜 영향에 대해 아주
                잘 알고 있으며 메타인지적 공부 방법을 통해 블로그에 170개의
                개발일지( 후기 포함)를 작성하며 노력하고 있습니다.
              </div1>
              <div1>
                개인적인 일보다는 비즈니스와 팀에 기여하는 일을 최우선으로
                생각하는 마인드 셋을 중요하다고 생각하고 팀 간의 업무를
                분업화하는 과정에서 발생하는 비효율적인 프로세스를 개선하는 것은
                팀 간에 협업을 위해 무엇보다 중요하다고 생각합니다.
              </div1>
              <div1>
                서로 평등한 관계속에서 일원들에게 모든 것을 공유하고 함께 문제를
                해결해가는 조직 문화를 선호합니다.
              </div1>
            </contentdiv>
          )}
        </ScrollContainer>
      </Introdiv>
    </>
  );
}

export default Intor;

const Introdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60%;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 80%;
  border-radius: 15px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  font-family: "Jua", sans-serif;
  padding: 2% 4%;
  overflow: auto;
  pofilestackdiv {
    display: flex;
    flex-direction: row;
    animation: ${({ isReqVisible }) =>
      isReqVisible ? "fadeOut 2s" : "fadeInLeft 2s"};
    profilediv {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 55px;
      word-spacing: 10px;
    }
    stackdiv {
      display: flex;
      flex-direction: row;
      font-size: 18px;
      margin: 0px 2%;
      line-height: 30px;
      img {
        width: 50%;
        height: auto;
        margin-left: 2%;
      }
      stackdetail {
        display: flex;
        flex-direction: column;
        sskilldiv {
          margin-bottom: 6%;
        }
      }
    }
  }
  contentdiv {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    font-size: 40px;
    line-height: 60px;
    word-spacing: 10px;
    animation: ${({ isReqVisible }) =>
      isReqVisible ? "fadeOut 2s" : "fadeInLeft 2s"};
    div1 {
      margin: 5% 2% 5% 0px;
    }
  }
`;

const Buttondiv = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  boxdiv {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    margin: 7% 2%;
    span {
      position: absolute;
      top: 25%;
      left: 20%;
      font-size: 20px;
      color: white;
    }
    &:hover {
      font-weight: bold;
      background-color: rgba(220, 220, 255, 0.6);
    }
    &.active {
      align-items: center;
      font-weight: bold;
      background-color: rgba(220, 220, 255, 0.6);
      width: 120px;
      height: 120px;
      border: 5px solid rgba(255, 255, 255, 0.8);
      span {
        top: 35%;
        left: 32%;
      }
    }
  }
`;
