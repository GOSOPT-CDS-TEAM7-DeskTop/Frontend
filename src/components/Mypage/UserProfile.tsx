import { styled } from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../../atoms/atom";
import userDataHooks from "../../hooks/userDataHooks";

function UserProfile() {
  const userData = useRecoilValue(userDataAtom);

  return (
    <>
      <UserProfileWrapper>
        <UserImageSection>
          <img src={userData?.userImage} alt="userImage" />
        </UserImageSection>
        <UserName>{userData?.nickname}</UserName>
        <UserId>{userData?.account}</UserId>
        <FollowNum>팔로잉 {userData?.following}명</FollowNum>
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
  margin-bottom: 1.6rem;

  img {
    width: 11rem;
    height: 11rem;

    border-radius: 55%;
  }
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
