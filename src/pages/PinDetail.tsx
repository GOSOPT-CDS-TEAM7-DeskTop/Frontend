import React, { ChangeEvent } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import SaveBtn from "../components/PinDetail/SaveBtn";
import FollowBtn from "../components/PinDetail/FollowBtn";
import ReplyLayout from "../components/PinDetail/ReplyLayout";

import styled from "styled-components";
import HeaderBar from "../components/layouts/HeaderBar";
import backSpanImg from "../assets/pinDetail/icon_backspan.svg";
import viewImg from "../assets/pinDetail/icon_viewImg.svg";
import moreImg from "../assets/pinDetail/icon_more.svg";
import linkImg from "../assets/pinDetail/icon_link.svg";
import saveImg from "../assets/pinDetail/icon_save.svg";
import dropdownImg from "../assets/pinDetail/icon_dropdown.svg";
import myprofileImg from "../assets/pinDetail/icon_my_profile.svg";
import emojiImg from "../assets/pinDetail/icon_emoji.svg";

function PinDetail() {
  let { pinId } = useParams();

  const [isSaveBtnClicked, setIsSaveBtnClicked] = useState(false);
  const [responseSaveData, setResponseSaveData] = useState(-1);
  const [isFollowBtnClicked, setIsFollowBtnClicked] = useState(false);
  const [pinDetailData, setPinDetailData] = useState([]);
  const [pinCommentData, setPinCommentData] = useState([]);
  const [content, setContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userValue = e.target.value;
    setContent(userValue);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    postComment();
  };

  const postComment = async () => {
    try {
      const res = await axios.post(`https://team7.collab-pinterest.p-e.kr/comment/${pinId}`, { content });
      getPinDetail();
    } catch (err) {
      console.log("postComment error:", err);
    }
  };

  // 게시글 정보를 GET
  const getPinDetail = async () => {
    try {
      const res = await axios.get(`https://team7.collab-pinterest.p-e.kr/pin/${pinId}`);
      setPinDetailData(res.data.data.pin);
      setPinCommentData(res.data.data.comment);
    } catch (err) {
      console.log("getPinDetail error: ", err);
    }
  };

  const clickSaveBtn = () => {
    console.log("눌림");
    postSave();
  };

  // 저장 여부를 POST / GET
  const postSave = async () => {
    try {
      const res = await axios.post(`https://team7.collab-pinterest.p-e.kr/pin/save`, { pinId });
      console.log(res);
    } catch (err) {
      console.log("getPinDetail error: ", err);
    }
  };

  useEffect(() => {
    getPinDetail();
    return () => {};
  }, []);

  return (
    <>
      <HeaderBar />
      <PinDetailWrapper>
        {/* 왼쪽 이미지 부분 */}
        <PinImgSection>
          <BackSpan src={backSpanImg} alt="backSpan" />
          <PinImgBtns>
            <button type="button">
              <img src={viewImg} alt="viewImg" />
              이미지 보기
            </button>
            <button type="button">아이디어 더 보기</button>
          </PinImgBtns>
          <PinImage src={pinDetailData.image} alt={pinDetailData.altTxt} />
        </PinImgSection>

        {/* 오른쪽 내용 부분 */}
        <PinContentSection>
          <PinContentContainer>
            {/* 오른쪽 상단 저장 부분 */}
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
              <SaveBtn
                isSaveBtnClicked={isSaveBtnClicked}
                setIsSaveBtnClicked={setIsSaveBtnClicked}
                clickSaveBtn={clickSaveBtn}>
                {isSaveBtnClicked ? "저장됨" : "저장"}
              </SaveBtn>
            </PinSaveBox>
            {/* 오른쪽 상단 팔로우 부분 */}
            <PinFollowBox>
              <PinFollowProfile>
                <ProfileImage src={pinDetailData.writerImage} alt="profileImg"></ProfileImage>
                <ProfileContent>
                  <p>{pinDetailData.writerNickname}</p>
                  <small>팔로워 {pinDetailData.writerFollower}명</small>
                </ProfileContent>
              </PinFollowProfile>
              <FollowBtn isFollowBtnClicked={isFollowBtnClicked} setIsFollowBtnClicked={setIsFollowBtnClicked}>
                {isFollowBtnClicked ? "팔로잉" : "팔로우"}
              </FollowBtn>
            </PinFollowBox>
          </PinContentContainer>

          {/* 오른쪽 하단 댓글 부분 */}
          <PinReplContainer>
            <PinReplNumBox>
              <p>댓글 {pinCommentData.length}개</p>
              <img src={dropdownImg} alt="dropdownImg" />
            </PinReplNumBox>
            <PinReplsBox>
              {pinCommentData.map((commentData) => (
                <ReplyLayout commentData={commentData}></ReplyLayout>
              ))}
            </PinReplsBox>
            <PinReplInputBox>
              <PinReplMyProfile src={myprofileImg} alt="myprofileImg" />
              <ReplInput>
                <Input type="text" placeholder="댓글 추가" onChange={handleInputChange} />
                <EmojiImg src={emojiImg} alt="emojiImg" type="submit" onClick={handleSubmit} />
              </ReplInput>
            </PinReplInputBox>
          </PinReplContainer>
        </PinContentSection>
      </PinDetailWrapper>
    </>
  );
}

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

const PinFollowBox = styled.div`
  display: flex;

  width: 100%;
  padding-top: 10rem;
  padding-left: 2.4rem;
  /* margin: 10rem 7rem 0rem 2.4rem; */
`;
const PinFollowProfile = styled.div`
  display: flex;
  align-items: center;

  width: 75%;
  height: 7.2rem;
`;
const ProfileImage = styled.img`
  width: 7.2rem;
  height: 100%;

  margin-right: 1.8rem;
  border-radius: 5rem;
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

/**
 *  오른쪽 하단 댓글 부분
 * */
const PinReplContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PinReplNumBox = styled.div`
  display: flex;
  width: 100%;
  margin: 9.8rem 0rem 0rem 2.8rem;
  & > p {
    display: flex;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.8rem;

    color: #000000;
  }
  & > img {
    margin: 1.33rem 1rem;
  }
`;
const PinReplsBox = styled.div`
  width: 100%;
  height: 39rem;

  padding: 4.6rem 2.8rem;
`;

// 댓글 입력 부분
const PinReplInputBox = styled.div`
  display: flex;

  width: 70rem;
  height: 10rem;
  border: 1px solid #efefef;
`;
const PinReplMyProfile = styled.img`
  width: 6.4rem;
  height: 6.4rem;

  margin: 1.8rem 3.6rem 3.2rem 1.8rem;
`;
const ReplInput = styled.div`
  position: relative;
  margin: 1.8rem 7rem 1.8rem 0rem;
`;
const Input = styled.input`
  position: absolute;
  width: 50rem;
  height: 6.4rem;
  padding-left: 40px;

  background: #e9e9e9;
  border-radius: 5rem;

  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  color: #9297a2;
`;

const EmojiImg = styled.img`
  position: absolute;

  width: 3.2rem;
  height: 3.2rem;

  margin: 1.6rem 2.3rem 1.6rem 44.5rem;
  cursor: pointer;
`;
