import styled from "styled-components";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import IMAGE from "../../assets/images/images";
import ArticleBrick from "../Home/ArticleBrick";

function MasonryLayout() {
  return (
    <>
      <StyledMasonryInfiniteGrid className="container" gap={5}>
        {IMAGE.map((src) => (
          <ArticleBrick imgSrc={src} />
        ))}
      </StyledMasonryInfiniteGrid>
    </>
  );
}

export default MasonryLayout;

const StyledMasonryInfiniteGrid = styled(MasonryInfiniteGrid)`
  article {
    img {
      width: 23rem;
      border-radius: 1.2rem;
    }
    &:hover {
      filter: brightness(0.6);
      cursor: pointer;
    }
  }
`;
