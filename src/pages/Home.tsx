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
  width: 175rem;
  padding-top: 0.8rem;
  margin: 0 auto;
`;
