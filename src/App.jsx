import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Router from './Router';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  min-height: 150%; //height길이를 이렇게 고정했는데 다른 좋은 방법이 있을까요?
  max-width: var(--app-max-width, 37.5rem);
  margin-left: auto;
  margin-right: auto;
  border: none;

  background-color: white;
`;
const App = () => {
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
