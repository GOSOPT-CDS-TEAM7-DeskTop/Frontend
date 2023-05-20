import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/layouts/HeaderBar";
import pinImg from "../assets/images/pinImg.png";
import backSpanImg from "../assets/icon/pinDetail/icon_backspan.svg";
import viewImg from "../assets/icon/pinDetail/icon_viewImg.svg";
import moreImg from "../assets/icon/pinDetail/icon_more.svg";
import linkImg from "../assets/icon/pinDetail/icon_link.svg";
import saveImg from "../assets/icon/pinDetail/icon_save.svg";

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
              <div>
                <img src={moreImg} alt="viewImg" />
                <img src={linkImg} alt="viewImg" />
                <img src={saveImg} alt="viewImg" />
              </div>
              <div>
                <button>프로필</button>
                <button>저장</button>
              </div>
            </PinSaveBox>
            <PinFollowBox></PinFollowBox>
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

const PinContentContainer = styled.div``;
const PinSaveBox = styled.div`
`;
const PinFollowBox = styled.div``;
const PinReplContainer = styled.div``;
