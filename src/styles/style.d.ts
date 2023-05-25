import "styled-components";

declare module "styled-components" {
  export interface IDefaultTheme {
    colors: {
      pinterest_black: string;
      pinterest_red: string;
      pinterest_gray: string;
      pinterest_blue: string;
      pinterest_lightgray: string;
      pinterest_white: string;
      pinterest_background: string;
    };
    fonts: {
      pinterest_title: SerializedStyles;
      pinterest_header1: SerializedStyles;
      pinterest_header2: SerializedStyles;
      pinterest_header3: SerializedStyles;
      pinterest_header4: SerializedStyles;
    };
  }
}
