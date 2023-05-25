import { css, DefaultTheme } from "styled-components";

const colors = {
  pinterest_black: "#000000",
  pinterest_red: "#E60022",
  pinterest_deepgray: "#5F5F5F",
  pinterest_blue: "#4E4AFE",
  pinterest_gray: "#EFEFEF",
  pinterest_lightgray: "#EDEDED",
  pinterest_white: "#FFFFFF",
  pinterest_background: "#F5F5F5",
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
  pinterest_header3: css`
    font-family: Roboto;
    font-size: 1.5rem;
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
