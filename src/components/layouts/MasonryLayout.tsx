import styled from "styled-components";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import IMAGE from "../../assets/images/images";

function MasonryLayout() {

  const childElements = IMAGE.map((element) => {
    return (
      <article>
        <img key={element} src={element} alt={element} />
      </article>
    );
  });

  return (
    <>
      <StyledMasonryInfiniteGrid className="container" gap={5}>
        {childElements}
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
