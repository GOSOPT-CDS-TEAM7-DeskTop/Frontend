import { styled } from "styled-components";

function Mypage() {
  return (
    <>
      <PinterestTitleWrapper>PinterestTitleHeader</PinterestTitleWrapper>
      <img src="../../src/assets/images/userImage.svg" alt="userImage" />
    </>
  );
}

export default Mypage;

const PinterestTitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.pinterest_red};
  ${({ theme }) => theme.fonts.pinterest_title};
`;
