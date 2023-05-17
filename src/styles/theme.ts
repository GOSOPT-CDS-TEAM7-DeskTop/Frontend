import { css, DefaultTheme } from "styled-components";

const colors = {
  pinterest_black: "#000000",
  pinterest_red: "#E60022",
  pinterest_deepgray: "#5F5F5F",
  pinterest_gray: "#EFEFEF",
  pinterest_lightgray: "#EDEDED",
};

const fonts = {
  pinterest_title: css`
    font-family: Roboto;
    font-size: 3.5rem;
    font-weight: 600;
    font-style: normal;
  `,
  pinterest_header1: css`
    font-family: Roboto;
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
  `,
  pinterest_header2: css`
    font-family: Roboto;
    font-size: 1.7rem;
    font-weight: 500;
    font-style: normal;
  `,
  pinterest_header4: css`
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: normal;
`,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
