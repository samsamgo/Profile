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

    @media screen and (max-width: 1326px) {
   font-size:10px;
    }
    @media screen and (min-width: 1326px) and (max-width: 1526px) {
    font-size:12px;
    }
    @media screen and (min-width: 1526px)and (max-width: 1827px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1827px)and (max-width: 2189px) {
      font-size: 16px;
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
