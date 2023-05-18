import { styled } from "styled-components";

function Home() {
  return (
    <>
      <PinterestTitleWrapper>PinterestTitleHeader</PinterestTitleWrapper>

    </>
  );
}

export default Home;

const PinterestTitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.pinterest_red};
  ${({ theme }) => theme.fonts.pinterest_title};
`;
