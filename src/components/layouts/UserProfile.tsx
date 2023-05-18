import { styled } from "styled-components";

function UserProfile() {
  return (
    <>
      <UserProfileWrapper>
        <Img src="../../src/assets/images/userImage.svg" alt="userImage" />
        <UserName>라망</UserName>
        <UserId>@ca090434</UserId>
        <FollowNum>팔로잉 0명</FollowNum>
        <ButtonWrapper>
          <ShareButton>공유</ShareButton>
          <ShareButton>프로필 수정</ShareButton>
        </ButtonWrapper>
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

  margin: 2.4rem 4.9rem;
`;

const Img = styled.img`
  width: 11rem;
  height: 11rem;

  margin-bottom: 1.6rem;
  border-radius: 55%;
`;

const UserName = styled.h1`
  margin-bottom: 1.2rem;

  ${({ theme }) => theme.fonts.pinterest_title};
  color: ${({ theme }) => theme.colors.pinterest_black};
  font-weight: 700;
`;

const UserId = styled.h4`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.pinterest_header4};
  color: ${({ theme }) => theme.colors.pinterest_deepgray};
  font-weight: 600;
`;

const FollowNum = styled.h3`
  ${({ theme }) => theme.fonts.pinterest_header3};
  color: ${({ theme }) => theme.colors.pinterest_black};
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const ShareButton = styled.button`
  padding: 1.2rem 1.5rem;
  margin-top: 1.6rem;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.fonts.pinterest_header2};
  color: ${({ theme }) => theme.colors.pinterest_black};
  background-color: ${({ theme }) => theme.colors.pinterest_gray};
  font-weight: 700;

  border: none;
  border-radius: 7.3rem;
`;
