import styled from "styled-components";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import IMAGE from "../../assets/images/images";

function MasonryLayout() {
  const childElements = IMAGE.map((element) => {
    return (
      <div>
        <img src={element} />
      </div>
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
  div {
    img {
      width: 16rem;
      border-radius: 1.2rem;
    }
  }
`;
