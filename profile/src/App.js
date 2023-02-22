import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/Mainpage";
import Mypage from "./Page/Mypage";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;

    @media screen and (max-width: 1126px) {
   font-size:11px;
    }
    @media screen and (min-width: 1126px) and (max-width: 1226px) {
    font-size:13px;
    }
        @media screen and (min-width: 1226px) and (max-width: 1326px) {
    font-size:14px;
    }
    @media screen and (min-width: 1326px) and (max-width: 1526px) {
    font-size:15px;
    }
    @media screen and (min-width: 1526px)and (max-width: 1827px) {
      font-size: 17px;
    }
    @media screen and (min-width: 1827px)and (max-width: 2189px) {
      font-size: 19px;
    }
    @media screen and (min-width: 2190px) {
      font-size: 21px;
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
