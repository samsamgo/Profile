import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/Mainpage";
import Mypage from "./Page/Mypage";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    *i {
    font-size: 5rem !important;
}
    @media screen and (max-width: 600px) {
   font-size:2px;
    }
    @media screen and (min-width: 601px) and (max-width: 1126px) {
    font-size:6px;
    }
    @media screen and (min-width: 1126px)and (max-width: 1626px) {
      font-size: 10px;
    }
    @media screen and (min-width: 1627px)and (max-width: 2189px) {
      font-size: 14px;
    }
    @media screen and (min-width: 2190px) {
      font-size: 20px;
    }
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/mypage/" element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
