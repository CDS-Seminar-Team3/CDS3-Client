import { ThemeProvider, styled } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Router from './Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <St.Ex>합세3조 안녕하세요!!</St.Ex>
      <Router />
    </ThemeProvider>
  );
}

export default App;

export const St = {
  Ex: styled.div`
    color: ${theme.colors.black};
    font-size: 20rem;
  `,
};
