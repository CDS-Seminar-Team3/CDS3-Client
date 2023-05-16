import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Router from './Router';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  border: none;
  height: 100vh;
  max-width: var(--app-max-width, 37.5rem);
  margin-left: auto;
  margin-right: auto;
  position: relative;
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
