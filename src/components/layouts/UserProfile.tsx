import { styled } from "styled-components";

function UserProfile() {
  return (
    <>
      <UserProfileWrapper>
      <Img src="../../src/assets/images/userImage.svg" alt="userImage" />
      <UserName>라망</UserName>
      <UserId>@ca090434</UserId>
      <FollowNum>팔로잉 0명</FollowNum>

      </UserProfileWrapper>
    </>
  );
}

export default UserProfile;


const UserProfileWrapper = styled.section`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    margin-top: 0.7rem;
    margin-bottom: 1rem;
`;

const Img = styled.img`
    width: 11rem;
    height: 11rem;
    border-radius: 55%;
    `;

const UserName = styled.h1`
    ${({ theme }) => theme.fonts.pinterest_title};
    color: ${({ theme }) => theme.colors.pinterest_black};
    margin-top: 1rem;
    margin-bottom: 1.2rem;
    `;

const UserId = styled.h4`
    ${({ theme }) => theme.fonts.pinterest_header4};
    color: ${({ theme }) => theme.colors.pinterest_deepgray};
    margin-bottom: 0.8rem;
    `;

const FollowNum = styled.h3`
    ${({ theme }) => theme.fonts.pinterest_header3};
    color: ${({ theme }) => theme.colors.pinterest_black};
    `;

