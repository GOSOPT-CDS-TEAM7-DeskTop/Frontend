import "styled-components";

declare module "styled-components" {
  export interface IDefaultTheme {
    colors: {
      pinterest_black: string;
      pinterest_red: string;
      pinterest_gray: string;
      pinterest_lightgray: string;
    };
    fonts: {
      pinterest_title: SerializedStyles;
      pinterest_header1: SerializedStyles;
      pinterest_header2: SerializedStyles;
    };
  }
}
