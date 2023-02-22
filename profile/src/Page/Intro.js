import React, { useState, useEffect, useRef } from "react";
import "animate.css/animate.min.css";
import styled, { keyframes } from "styled-components";

function Intor() {
  const [active, setActive] = useState("소개글");
  const [div1Visble, setdiv1Visble] = useState(false);
  const [div2Visble, setdiv2Visble] = useState(true);
  const [div3Visble, setdiv3Visble] = useState(true);
  const scrollContainerRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(scrollContainerRef.current.scrollTop);
    }
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef, active]);

  useEffect(() => {
    if (scrollPosition < 127) {
      setdiv1Visble(false);
      setdiv2Visble(true);
    } else if (scrollPosition > 127 && scrollPosition < 365) {
      setdiv1Visble(true);
      setdiv2Visble(false);
      setdiv3Visble(true);
    } else {
      setdiv1Visble(false);
      setdiv2Visble(true);
      setdiv3Visble(false);
    }

    console.log(scrollPosition);
  }, [scrollPosition]);

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
            <contentdiv1
              ref={scrollContainerRef}
              isReqVisible={active === "가치"}
            >
              <Contentdiv div1Visible={div1Visble}>
                개발자로서 사용자의 <stdiv1>만족도가</stdiv1> 가장 중요하다는
                것을 인지하고 있으며, 이를 실현하기 위해 사용자의 요구사항과
                <stdiv1>피드백</stdiv1>을 항상 고려합니다. 또한, 다양한
                관점에서의 피드백을 받아 세세한 부분까지 신경쓰며 사용자의
                <stdiv1>만족도를</stdiv1> 고려합니다.
              </Contentdiv>
              <Contentdiv div1Visible={div2Visble}>
                저는 문제 해결에 있어서 <stdiv1>미래의 가능성을</stdiv1>
                고려하며, 책임감과 주도성을 가지고 <stdiv1>주도적</stdiv1>으로
                개발하는 것을 선호합니다.
              </Contentdiv>
              <Contentdiv div1Visible={div3Visble}>
                저는 개인의 성장과 함께 팀의 성장을 위해 스스로의 역량을
                계속해서 <stdiv1>향상</stdiv1>시키고, 팀 내에서 지식을 공유하며
                <stdiv1>함께</stdiv1> 발전할 수 있는 문화를 만들어 나가고자
                합니다. 이러한 노력을 통해, 팀 내에서 각자의 장점을 살리고 서로
                보완하며, 더 나은 <stdiv1>협력</stdiv1>을 이끌어내고자 합니다.
              </Contentdiv>
            </contentdiv1>
          )}
          {active === "교육" && (
            <edudiv isReqVisible={active === "교육"}>
              <imgdiv>
                <imagenamediv>코드스테이츠 (Code States)</imagenamediv>
                <imgcontentnamediv>기간</imgcontentnamediv>
                <imgcontentdiv>📅2022.08.19 - 2023.02.10</imgcontentdiv>
                <imgcontentnamediv>커리큘럼</imgcontentnamediv>
                <imgcontentdiv>
                  📍React로 웹 개발을 학습하며 컴포넌트 기반 설계, 가상 돔, 상태
                  관리 등을 배웠고, 이를 실제 프로젝트에 적용할 수 있습니다.
                </imgcontentdiv>
                <imgcontentdiv>
                  📍파트너와 함께 실습 진행(페어 프로그래밍)을 통해 협업 능력을
                  향상시키고, 이를 토대로 깃 사용법과 프로젝트에서 팀원과
                  협력하는 방법을 익히게 되었습니다.
                </imgcontentdiv>
                <imgcontentdiv>
                  📍프로젝트 경험을 통해 백엔드와의 소통 방법을 익숙하게 다룰 수
                  있고, Rest API를 이용한 서버 API 통신에 능숙합니다. 이를
                  기반으로 프론트엔드와 백엔드 간의 데이터 흐름을 원활하게
                  구축할 수 있습니다.
                </imgcontentdiv>
              </imgdiv>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAABtCAMAAAAbMqFLAAAApVBMVEX///8AAABAAMfW1tZ5eXnMzMzr6+sqKiowMDDb29sWFhZCQkI2AMVra2txSdXQwfGurq7GxsYODg75+fmFhYUmJiZiYmLAwMCmpqZvb2/l5eVZWVmoqKi2trY8PDzo5feZmZmBgYGRkZFRUVEfHx80NDRKSkqWlpZWVlb7+f6EZtnPw++LcNt8fHw+Pj7n3/jc0fR+XddtQdSReN2GadpuRNSZgN/SUqaUAAALiklEQVR4nO2daWPiOAyGkwKh9NgpzZShdNqFUuhc7XZmj///05aEHJItyXYwyRT8fgSRww+WbVm2oyjIWY83p4oeNJveSrXZ6OZes1sOCbvc9pG9/+ic+sGw7/Ulj0SPsS7VpvdEGG30STW8oe0yfWbunzzQ9hPvb2qlD431VzcPDPWZKkjFJmFYxnFPsRzyMHXyW60Z805gfv120Vgn37t4YqhnsiCxzeyUBfQ0wKYSzGuVfKZ0yZl3AvOfi5PGujh56+KRa32iCxLZpF8EQmcJspVgxk+p/gCXrHUXMH/uwDJTp3WTYYlhnkuA4tUM2oow47VGk2qwO4O58bG7sezU047PzDBTvu5s9QoJyTA1QFcOtvvXriwzdeZpe9dcQQIjE8s4PgfWBpjxM3oAzjF0A3NXH7vVh7YfeyuhX1MbLYws4/iuNjfBjK/AA/REy5Zh7uxjS3XiaQWWNcyPFiw35V55WiNMMEDhBq/dwPRTLzN14GlTqV9TGk2tWMbxovyBGWZcdpgS4c/UOsyv/lh24WmltvC6sBlYsozjMrBnAXNiadomTG8+dqvWPe0tLrp5AlXYKB2U9ai2UMYU0+IXgFBte49MLwufrLAbJIqIQene9MMry5OTP1t89kwY5i1po8BEI0ochSNgAltEnobJxPpa0h9+YV50CpOZocAwR+g73ObKMFE/ioQ59/tyrjokmHcJbQNhXqt1ZwYjDgaYKajHFMxF1K0OCSbn4yBM3RHP7WHCKxEwl/5eq5kOCeaYsYEwdU/sDybdYreoANMfzFX/pa9pGrWnANMfTFJ3UXsKMPcMs82gQYAZYAaYAaZ/BZhAAWaAGWAGmP4VYAIFmGGcGWASMG8muu74xSn+FWD6g3mZUvL3rkYdEkybWZNL7Vs45WyCCZINKJj+XquZDgnmGbUKJFImpz9KXxpgzkCGLtVmcivE2tIhwYyHNE2caTBH341RBrUMcwZX7ZEdoI5p/jokmEp+TyklBwimoyuJeyJMvCKQ7s3C5Oj29d0vyx9fW35+JdXy7BxoXdiMsU38UJso35QsAMzaFic7T+ihyes51murqSQffLL82TZLeW1AYZNOJCOgdZlEZJE3W6bYmuzazWh/8+Zo26+XkZzhXNqkd1YsT6uEMDPMavj48lvB9OZpO2EprsGqbFJukTpiWTe4Rpgv9f0XvxXM6LuXutmBj92K3M4Aw4wSbgknEEioNcH8AkMBct1sfUnfmw+Wf3fEUlgXBGySlYEP2qrAAHOFE3RFmu0vtt3d03bkY7fiVuxBm5kBJgofyTCfcFK8vGKwgz0Ndu0FXXzrkCVbN5CNvCYWhwJlmMrWJJHYbnaxQcXbyS44L/7r4JGh6MEHtpH6vUroRoRJBQb4HSo62Trm+0nzfYAu/uniiaHo/ScUI77fq2YqSzDpOS22F9bNDl1vv/5oqH//69TH5iJXUKtGc8ImkxalEWByUyMczY62W3vfovZs0ozoEtcjbvzeeWvNthSzf0yA2UTpSJNupNtspM0fE5cqxawazDQjf0CG/oOCgoKCgoKCgoKCgoKCgoKCgoKCgoK8qDfQpYTHCQtFSpw8rS6KFyukxgsxS1VMoi51hOF1crb4DK/MM6fVKfRH9TcIszlB70Z5vN58SkmZOCGTDIZHR5Ob+UcHrRl2zdbTq0DhoguZ9t+O4xW+0Ig5lQGnAC2Yp6JoJj1CxEQdJfK3+1CzvyF/GgjMsnGGCRCgiWFXmAljdY1g8ol5eqEwZ0xZLTYSz0vyKz1fzax74XrA07rCRNUdfuUIM+GS4BFMIclS87Ts2QAWCwGtUvJ9yZ0ml4+zVe0gXWH24Xcw+coNJr88BcLsc0a5lA4YcyZjrOeTaUpfTc/uVdx+ApyE07NyVe/nCBM7x6fGMHlMNUzjkVSwUPhz/GKjp23Rx27lVjfNJ42UvscRpnJhkNvsBFP4r9UwjSsFQSVO5eURYt1suV5mcqmbpnqZ6bEJTLVdApuLuMCUnq8kZLVOsCyURD4jUNyqv9X2spC2lT2vhdUF5w1galnr9aDQAabUNythWq7gHdvyYD2t6J/3J1tPOzJfKlfiDlNr6uqeoj1M+YSiAqYIHFwzC1ykFiuxi/+uztK0fG1fsqyb8hKeWg1gat/WJxpYwxywRzjmcoP5kAijHCySZhc+ditLTwth3l9hzUHQLYcpn4GXCcAk4hCVuzCH84a53cx0Rw3m+WflJcAJ2BuY4tlzUMR40/J/sB9ZeVoIU3t6UJQ5zJr2PagxZ/O66OpmkWrHqk2c0vpKj+BKT9P6BrmdEgcY1t+j+wGY2goEsBZ0A9Oex716IXOHea+yiew5wQQCVeuGvA/ZGFN24EpD9S4KTG4qBcJU1zeA59jANLr3SvoAxW5njX1pZ5irp0rOMBfUE+l/96hnD5PtZMowq3dYu8DU/ez7hinJBDMli41Yg2cPkx/MSzCxAkxKJphMB1M3tYb5rP2UulmAWcjCvJIJJugtfAEjO52INUzhbQLMoiyBfaqeBCssgDTAhDH2TwDJg1bW1jC1c2rrBwQw72biSxwPzNOhqoc5dw0DTDC6i9E9tKixNcwb7emGw9OeCvNas7lZfq4vezwwSU3oPqQME51Uikbq2lbeDr1ZQpYRoH4ZQTlymBtNxnpDJMOEEdUenvxWL7UTTIdw3mIQYG61+qgykGGC7s8yxTtyqRW9LZhxfP586DC5VClVTkGDBITo8v4r2DHkTvlb+ICp7kjMaHXoQYMoNbZLuZxgTtUfwqqjxOR8wIxmtwbDXE7hvHcJc9PA2byhE0wwhbuN+YxAlFc5MsELzCi6spimPAaYUSpn5+VygQlj7MVQBNScJ2zsCWaUyNl5mY4C5sZNGR/UBSbc13L1kAvOS+Jouy+Ym5bTNFd5JDCjlE9p38oBpmlvYBxt9zHOLG9sMD8WmJvK2YcnR7xe9m/7l6BT6gDTOFBA17KGOVcnpvFk+PZiE3T8RfYSYJR0PDA3tVM9Aq3h5DSfLV5o3gim3dtoL9F0cvqdw9TUDKZpz+5tHKGSNUz77FGkY4IJe57qd81gWiRVw5bOvs0k0hQKEQf2US+4gWn0GpX0kPTvD9N7DhCdYoAFo+0OHSCWpn0OkHDwCtZSD0dbxpn2oxftcQh5h2n1yqCkXHqz9+o2srNUg6m+BIZpSsQt9YUsK7vf7kN2p5hBmIMx1r2aN2sD08oZAR/meQps/Ul5CbDhdAbTjiaTrzCwOF5nL1IPGrWAKckW5sicKB2jwhJhPvOXyOWe0S4ecVVKnQyoNO6mbtqeLugBJjofyLw+MFfNX4RpqudNYJq9pXBofCee1rJe2gwkcp0K85loHgRmuq9OoVawztbPJ8M09I0LmPLqokqlPxjL3lLMCRtYeR6vcjjDfsCfTlDrTNuGg4EJi/VKSawagTudVwVmgCk3m2Vs1hSMzLWsri56S6Fe5m/YdrtpXS/V0mT0oG+pwsBcgI+138CV6lUIwAQTXVJVFWi3cLRwsCF4S+NxGdwuNnuSQ73MZDw075XwOzTMGfhYb7Vhta3+/0aYUi+onjUxVpgX9BKspzXk3ea3atPTOrLcIJDX6a+pIqZhQnenL0JLYPylLDQzTMHTgikwQ7t5q0Bi4FsdY2Phy3zJyccWpSyt7qb/qzRMMKO4JH4EqZQrRyxg8jThfKa4llP/g/du+7psx3PET/ci4z42pPghAPNfJWHC2kHtjgQDwWUTZgOT3agITU6P+MDrvEGRvF+x2+hw41USZjKty5PkUvcd1gMXmGzdRL58xqUazB1L492LTqFh21+uRGfT7WwwHRguQgpLsBsljFpoq0BrzSeXhG5xN5vZcMlqQ7zD0qNeVhN+J7lbYIZnZ9LZdHnGzD5m1fD14wy2wjNwpb7QlTT3MqMscYR4iYYToUGFRtxs1d1E3V+4Vf0PSHkVYjKpeCcAAAAASUVORK5CYII="
                alt="코드스테이츠"
              />
            </edudiv>
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
  height: 50%;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
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
      font-size: 5rem;
      line-height: 3rem;
      word-spacing: 0.2rem;
    }
    stackdiv {
      display: flex;
      flex-direction: row;
      font-size: 5rem;
      margin: 0px 2%;
      line-height: 2rem;
      img {
        width: 50%;
        height: auto;
        margin-left: 2%;
      }
      stackdetail {
        display: flex;
        flex-direction: column;
        sskilldiv {
          margin-bottom: 3%;
        }
      }
    }
  }
  contentdiv1 {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    line-height: 3rem;
    word-spacing: 0.2rem;
    animation: ${({ isReqVisible }) =>
      isReqVisible ? "fadeOut 2s" : "fadeInLeft 2s"};
  }
  edudiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    width: auto;
    padding: 1% 1%;
    animation: ${({ isReqVisible }) =>
      isReqVisible ? "fadeOut 2s" : "fadeInLeft 2s"};
    img {
      width: auto;
      height: 30%;
      opacity: 0.8;
      border-radius: 15px;
      border: 5px solid rgba(255, 255, 255, 0.8);
      margin: 10% 0px 0px 0px;
    }
    imgdiv {
      display: flex;
      flex-direction: column;
      padding: 0px 1%;
      imagenamediv {
        font-size: 2rem;
        margin: 3% 3%;
      }
      imgcontentnamediv {
        padding-left: 4%;
        font-size: 1.2rem;
        margin-top: 3%;
        line-height: 1.5rem;
      }
      imgcontentdiv {
        padding-left: 10%;
        margin-top: 3%;
        font-size: 1.2rem;
        line-height: 1.2rem;
      }
    }
  }
`;
const Contentdiv = styled.div`
  margin: 5% 2% 5% 0px;
  font-size: 2rem;
  color: ${({ div1Visible }) =>
    div1Visible ? "rgba(255, 255, 255, 0.3)" : "black"};
  stdiv1 {
    font-size: 2.5rem;
    color: ${({ div1Visible }) =>
      div1Visible ? "rgba(255, 255, 255, 0.6)" : "rgba(1, 143, 244, 0.6)"};
    font-weight: bolder;
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
    display: flex;
    flex-grow: 1;
    width: 60%;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    margin: 6% 2%;
    text-align: center;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1rem;
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
      display: flex;
      flex-grow: 2;
      border: 5px solid rgba(255, 255, 255, 0.8);
      span {
        font-size: 2rem;
      }
    }
  }
`;
