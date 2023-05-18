import { styled } from "styled-components";
import MasonryLayout from "../components/layouts/MasonryLayout";
import HeaderBar from "../components/layouts/HeaderBar";

function Home() {
  return (
    <>
      <HeaderBar />
      <MansoryWrapper>
        <MasonryLayout />
      </MansoryWrapper>
    </>
  );
}

export default Home;

const MansoryWrapper = styled.section`
  width: 100%;
  padding: 0.8rem 8.6rem 0 8.6rem;
`;
