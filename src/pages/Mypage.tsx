import { styled } from "styled-components";
import UserProfile from "../components/layouts/UserProfile";

function Mypage() {
  return (
    <>
        <PinterestTitleWrapper>PinterestTitleHeader</PinterestTitleWrapper>
        <UserProfile/>
    </>

    );
}

export default Mypage;

const PinterestTitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.pinterest_red};
  ${({ theme }) => theme.fonts.pinterest_title};
`;
