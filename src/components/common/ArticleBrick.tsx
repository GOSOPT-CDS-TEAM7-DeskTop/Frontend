import { styled } from "styled-components";

interface PropsData {
  imgSrc: string;
  ishome: boolean;
}

interface IsHome {
  ishome: boolean;
}

function ArticleBrick({ imgSrc, ishome }: PropsData) {
  return (
    <ArticleBrickWrapper ishome={ishome}>
      <img key={imgSrc} src={imgSrc} alt={imgSrc} />
    </ArticleBrickWrapper>
  );
}

export default ArticleBrick;

const ArticleBrickWrapper = styled.article<IsHome>`
  img {
    width: ${({ ishome }) => (ishome ? "23.6rem" : "21.2rem")};
    border-radius: 1.2rem;
  }
  &:hover {
    filter: brightness(0.6);
    cursor: pointer;
  }
`;

