import { styled } from "styled-components";

function UserProfile() {
  return (
    <>
      <UserProfileWrapper>
        <UserImageSection>
          <img src="../../src/assets/images/userImage.svg" alt="userImage" />
        </UserImageSection>
        <UserName>라망</UserName>
        <UserId>@ca090434</UserId>
        <FollowNum>팔로잉 0명</FollowNum>
        <ButtonSection>
          <ShareButton>공유</ShareButton>
          <ShareButton>프로필 수정</ShareButton>
        </ButtonSection>
      </UserProfileWrapper>
    </>
  );
}

export default UserProfile;

const UserProfileWrapper = styled.section`
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  margin: 2.4rem;
`;

const UserImageSection = styled.div`
  width: 11rem;
  height: 11rem;

  margin-bottom: 1.6rem;

  border-radius: 55%;
`;

const UserName = styled.h1`
  margin-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.pinterest_black};
  ${({ theme }) => theme.fonts.pinterest_title};

  font-weight: 700;
`;

const UserId = styled.h4`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.pinterest_deepgray};
  ${({ theme }) => theme.fonts.pinterest_header4};

  font-weight: 600;
`;

const FollowNum = styled.h3`
  color: ${({ theme }) => theme.colors.pinterest_black};
  ${({ theme }) => theme.fonts.pinterest_header3};

  font-weight: 600;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const ShareButton = styled.button`
  padding: 1.2rem 1.5rem;
  margin-top: 1.6rem;

  border: none;
  border-radius: 7.3rem;

  color: ${({ theme }) => theme.colors.pinterest_black};
  background-color: ${({ theme }) => theme.colors.pinterest_gray};

  ${({ theme }) => theme.fonts.pinterest_header3};
  font-weight: 700;
`;
