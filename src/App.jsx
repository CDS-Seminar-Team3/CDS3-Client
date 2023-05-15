import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Router from './Router';
import styled from 'styled-components';

import { useEffect } from 'react';

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: var(--app-max-width, 37.5rem);
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const App = () => {
  const setScreenSize = () => {
    // 모바일에서 100vh 적용시 오류가 있기때문에 이렇게 설정하고 100vh대신 height: calc(var(--vh, 1vh) * 100);사용
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth / 10}rem`);
  };
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
