import { styled } from "styled-components";

interface IImgSrc {
  imgSrc: string;
}

function ArticleBrick({ imgSrc }: IImgSrc) {
  return (
    <ArticleBrickWrapper>
      <img key={imgSrc} src={imgSrc} alt={imgSrc} />
    </ArticleBrickWrapper>
  );
}

export default ArticleBrick;

const ArticleBrickWrapper = styled.article``;
