import React from "react";
import styled from "styled-components";
import HeaderBar from "../components/layouts/HeaderBar";
import pinImg from "../assets/images/pinImg.png";
import backSpan from "../assets/icon/pinDetail/icon_backspan.svg";
const PinDetail = () => {
  return (
    <>
      <HeaderBar />
      <PinDetailWrapper>
        <PinImgSection>
          <BackSpan src={backSpan} alt="backSpan" />
          <PinImage src={pinImg} alt="pinImage" />
          <PinImgMoreBtn type="button">이미지 보기</PinImgMoreBtn>
          <PinIdeaMoreBtn type="button">아이디어 더 보기</PinIdeaMoreBtn>
        </PinImgSection>
        <PinContentSection>
          <PinContentBox></PinContentBox>
          <PinReplBox></PinReplBox>
        </PinContentSection>
      </PinDetailWrapper>
    </>
  );
};

export default PinDetail;
const PinDetailWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 9.6rem;
`;
const PinImgSection = styled.section`
  width: 70rem;
  height: 91rem;

  position: relative;
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
const PinImgMoreBtn = styled.button`
  position: absolute;
  background-color: rgba(255, 254, 252, 0.9);
  color: black;
  border-radius: 5rem;
`;
const PinIdeaMoreBtn = styled.button`
  position: absolute;
  background: rgba(255, 254, 252, 0.9);
  color: black;
  border-radius: 5rem;
`;
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

const PinContentBox = styled.div``;
const PinReplBox = styled.div``;
