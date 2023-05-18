import { styled } from "styled-components";
import UserProfile from "../components/layouts/UserProfile";
import HeaderBar from "../components/layouts/HeaderBar";

function Mypage() {
  return (
    <>
        <HeaderBar/>
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

