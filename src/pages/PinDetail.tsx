import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/layouts/HeaderBar";
import pinImg from "../assets/pinDetail/pinImg.png";
import backSpanImg from "../assets/pinDetail/icon_backspan.svg";
import viewImg from "../assets/pinDetail/icon_viewImg.svg";
import moreImg from "../assets/pinDetail/icon_more.svg";
import linkImg from "../assets/pinDetail/icon_link.svg";
import saveImg from "../assets/pinDetail/icon_save.svg";
import profileImg from "../assets/pinDetail/icon_owners_profile.png";
import dropdownImg from "../assets/pinDetail/icon_dropdown.svg";

const PinDetail = () => {
  return (
    <>
      <HeaderBar />
      <PinDetailWrapper>
        <PinImgSection>
          <BackSpan src={backSpanImg} alt="backSpan" />
          <PinImgBtns>
            <button type="button">
              <img src={viewImg} alt="viewImg" />
              이미지 보기
            </button>
            <button type="button">아이디어 더 보기</button>
          </PinImgBtns>
          <PinImage src={pinImg} alt="pinImage" />
        </PinImgSection>
        <PinContentSection>
          <PinContentContainer>
            <PinSaveBox>
              <EtcButtons>
                <img src={moreImg} alt="viewImg" />
                <img src={linkImg} alt="viewImg" />
                <img src={saveImg} alt="viewImg" />
              </EtcButtons>
              <DropDownButton>
                <span>프로필</span>
                <img src={dropdownImg} alt="dropdownImg" />
              </DropDownButton>
              <SaveButton>저장</SaveButton>
            </PinSaveBox>
            <PinFollowBox>
              <PinFollowProfile>
                <ProfileImage src={profileImg} alt="profileImg"></ProfileImage>
                <ProfileContent>
                  <p>KJH</p>
                  <small>팔로워 100000명</small>
                </ProfileContent>
              </PinFollowProfile>
              <FollowButton>팔로우</FollowButton>
            </PinFollowBox>
          </PinContentContainer>
          <PinReplContainer></PinReplContainer>
        </PinContentSection>
      </PinDetailWrapper>
    </>
  );
};

export default PinDetail;

/**전체를 감싸는 Wrapper */
const PinDetailWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 9.6rem;
`;

/**이미지 부분(왼쪽) */
const PinImgSection = styled.section`
  position: relative;

  width: 70rem;
  height: 91rem;

  border-radius: 50px 0px 0px 0px;
  overflow: hidden;
`;
const PinImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BackSpan = styled.img`
  position: absolute;

  margin-left: 2.4rem;
  margin-top: 2.4rem;
`;
const PinImgBtns = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;

  width: 100%;
  margin-top: 83rem;

  & > button {
    margin-left: 4.4rem;
    margin-right: 4rem;
    padding: 1.2rem 3rem;

    border-radius: 5rem;
    background-color: rgba(255, 254, 252, 0.9);
    color: #000000;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;

    & > img {
      margin: 0rem 0.676rem;
      width: 1.4rem;
    }
  }
`;

/**이미지 오른쪽 내용 부분(오른쪽) */
const PinContentSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 70rem;
  height: 91rem;

  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: #ffffff;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.05);
  border-radius: 0px 50px 0px 0px;
`;

const PinContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PinSaveBox = styled.div`
  display: flex;

  width: 100%;

  margin: 5rem 7rem 0rem 3.6rem;
`;
const EtcButtons = styled.div`
  margin-right: 20.6rem;
  & > img {
    margin: 1.2rem;
  }
`;
const DropDownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 12rem;
  height: 6rem;

  margin-right: 2.4rem;
  & > span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  & > img {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.5rem 0.5rem 0.2rem 0.2rem;
    margin-left: 0.6rem;
  }
`;
// 추후 SaveButton 컴포넌트로 대체 예정
const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const PinFollowBox = styled.div`
  display: flex;

  width: 100%;

  margin: 10rem 7rem 0rem 2.4rem;
`;
const PinFollowProfile = styled.div`
  display: flex;
  align-items: center;

  height: 7.2rem;
  margin-right: 29.6rem;
`;
const ProfileImage = styled.img`
  width: 7.2rem;
  height: 100%;

  margin-right: 1.8rem;
`;
const ProfileContent = styled.article`
  display: flex;
  flex-direction: column;
  & > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
  & > small {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #5f5f5f;
  }
`;
const FollowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;
const PinReplContainer = styled.div``;
