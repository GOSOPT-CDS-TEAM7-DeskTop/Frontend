import { DefaultTheme, ThemeProvider, styled } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PinterestTitleWrapper>PinterestTitleHeader</PinterestTitleWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;

interface IProps {
  theme: DefaultTheme;
}

const PinterestTitleWrapper = styled.h1<IProps>`
  color: ${({ theme }) => theme.colors.pinterest_red};
  ${({ theme }) => theme.fonts.pinterest_title};
`;
