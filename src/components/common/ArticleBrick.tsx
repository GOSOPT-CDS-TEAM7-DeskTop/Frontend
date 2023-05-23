import { styled } from "styled-components";

interface PropsData {
  imgSrc: string;
  isHome: boolean;
}

interface IsHome {
  isHome: boolean;
}

function ArticleBrick({ imgSrc, isHome }: PropsData) {
  return (
    <ArticleBrickWrapper isHome={isHome}>
      <img key={imgSrc} src={imgSrc} alt={imgSrc} />
    </ArticleBrickWrapper>
  );
}

export default ArticleBrick;

const ArticleBrickWrapper = styled.article<IsHome>`
  img {
    width: ${({ isHome }) => isHome ? "23.6rem" : "21.2rem"};
    border-radius: 1.2rem;
  }
  &:hover {
    filter: brightness(0.6);
    cursor: pointer;
  }
`;
