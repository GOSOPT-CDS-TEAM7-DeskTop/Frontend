import { styled } from "styled-components";
import MasonryLayout from "../components/layouts/MasonryLayout";

function Home() {
  return (
    <>
      <HeaderWrapper>PinterestTitleHeader</HeaderWrapper>
      <MansoryWrapper>
        <MasonryLayout />
      </MansoryWrapper>
    </>
  );
}

export default Home;

/** 차후 대체할 Header */
const HeaderWrapper = styled.h1`
  height: 5rem;
  border: 1px solid black;
`;

const MansoryWrapper = styled.section`
  width: 100%;
  padding: 0 8.6rem;
`;
