import { styled } from "styled-components";
import UserProfile from "../components/layouts/UserProfile";

function Mypage() {
  return (
    <>
        <PinterestTitleWrapper></PinterestTitleWrapper>
        <UserProfile/> 

     </>

    );
}

export default Mypage;

const PinterestTitleWrapper = styled.h1`
  margin-bottom: 7.4rem;
  
  color: ${({ theme }) => theme.colors.pinterest_red};
  ${({ theme }) => theme.fonts.pinterest_title};
`;

