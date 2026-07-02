import logoAmoona from "../assets/2.png";
import logoStack from "../assets/3.png";

export const profile = {
  nameKo: "장경욱",
  nameEn: "Jang Kyeong Uk",
  role: "Front-end Developer",
  quote: "You will face many defeats in life, but never let yourself be defeated.",
  quoteBy: "Maya Angelou",
  birth: "2003.11.19",
  email: "jku2659@gmail.com",
  school: "동아마이스터고등학교 (전기·전자제어과)",
  github: "https://github.com/samsamgo",
  blog: "https://samsamgoo.tistory.com/",
  statsImg:
    "https://github-readme-stats.vercel.app/api/top-langs/?username=samsamgo&theme=dracula&exclude_repo=Computer-Science-Engineering,clone-web-scrapper&hide=Procfile&layout=compact&langs_count=8",
};

// 만 나이 계산 (생일: 2003.11.19)
export function getAge() {
  const birth = new Date(2003, 10, 19);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const beforeBirthday =
    now.getMonth() < birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate());
  if (beforeBirthday) age -= 1;
  return age;
}

export const stacks = [
  {
    label: "프로그래밍 언어",
    icon: "🤖",
    items: ["JavaScript", "HTML", "CSS", "Python", "Ruby"],
  },
  {
    label: "프레임워크 · 라이브러리 · 번들러",
    icon: "🔨",
    items: ["React", "Redux", "Express", "Webpack"],
  },
  {
    label: "서버",
    icon: "💻",
    items: ["JSON-Server", "GraphQL"],
  },
  {
    label: "Others",
    icon: "🏹",
    items: ["Git", "AWS (EC2 · RDS · S3)", "Postman", "Slack", "Notion", "Figma"],
  },
];

export const values = [
  {
    title: "사용자 만족",
    body: "개발자로서 사용자의 만족도가 가장 중요하다는 것을 알고 있습니다. 사용자의 요구사항과 피드백을 항상 고려하고, 다양한 관점의 피드백으로 세세한 부분까지 다듬습니다.",
  },
  {
    title: "주도성",
    body: "문제를 해결할 때 미래의 가능성까지 고려하며, 책임감과 주도성을 가지고 스스로 방향을 찾아 개발하는 것을 선호합니다.",
  },
  {
    title: "함께 성장",
    body: "개인과 팀의 성장을 함께 추구합니다. 팀 안에서 지식을 공유하고 서로의 장점을 살려 보완하며, 더 나은 협력을 이끌어내는 문화를 만들어 갑니다.",
  },
];

export const education = {
  name: "코드스테이츠 (Code States)",
  period: "2022.08.19 – 2023.02.10",
  course: "Frontend Engineering 부트캠프",
  items: [
    "React로 컴포넌트 기반 설계, 가상 DOM, 상태 관리를 학습하고 실제 프로젝트에 적용",
    "페어 프로그래밍으로 협업 능력을 키우고, Git 워크플로와 팀 협업 방식을 체득",
    "REST API 기반 서버 통신에 능숙해져 프론트엔드-백엔드 간 데이터 흐름을 원활하게 구축",
  ],
};

export const projects = [
  {
    name: "아모나 (AMOONA)",
    logo: logoAmoona,
    period: "2023.01.03 – 2023.01.31",
    team: "코드스테이츠 파이널 프로젝트 · 7인 / 4주",
    desc: "주변 사람들과 함께 운동할 수 있도록 운동 모임을 만들고, 위치 기반으로 모임 장소를 지도에 표시하는 웹 서비스",
    stack: ["React", "Redux", "Kakao Map API", "React Router", "Axios"],
    roles: [
      "메인 페이지 (메인 · 헤더 · 푸터)",
      "게시글 등록 페이지 (위치 · 종목 · 날짜 · 시간)",
      "게시글 조회 페이지 (상세 내용 표시)",
      "지도 (좌표 기반 위치 표시, 거리별 맵 레벨 전환)",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/codestates-seb/seb41_main_031",
      },
      {
        label: "기획서",
        url: "https://www.notion.so/codestates/f8ea3a2e92914268bc743c5cfbee6bab?pvs=4",
      },
      { label: "회고 블로그", url: "https://samsamgoo.tistory.com/167" },
    ],
  },
  {
    name: "Stack Overflow Clone",
    logo: logoStack,
    period: "2022.12.15 – 2023.01.02",
    team: "코드스테이츠 프리 프로젝트 · 6인 / 2주",
    desc: "Stack Overflow의 핵심 기능을 재현하며 협업 프로세스와 상태 관리를 연습한 클론 코딩 프로젝트",
    stack: ["React", "Redux", "Styled-components", "Axios"],
    roles: [
      "메인 페이지 (푸터)",
      "게시글 조회 페이지 (북마크 · 댓글)",
      "마이페이지",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/codestates-seb/seb41_pre_002",
      },
      {
        label: "기획서",
        url: "https://www.notion.so/codestates/2-71cc536afabc4960b70414acd74213ea?pvs=4",
      },
      { label: "회고 블로그", url: "https://samsamgoo.tistory.com/151" },
    ],
  },
];

// 원본에 있던 영상(r0z8pE9Ix9M)은 삭제되어 Lofi Girl 라이브로 교체
export const video = {
  id: "jfKfPfyJRdk",
  title: "Lofi Girl — beats to relax/study to 🎧",
  desc: "입장할 때부터 백그라운드에서 흐르고 있는 로파이 채널입니다. 여기서 직접 조절할 수 있어요.",
};

export const location = {
  lat: 36.7722496,
  lng: 126.451712,
  label: "🏠 베이스캠프",
  desc: "지도를 클릭하면 해당 지점의 좌표와 주소를 확인할 수 있어요.",
};
