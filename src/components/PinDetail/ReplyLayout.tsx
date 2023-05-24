import React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/icon/icon_heart.png";
import userProfile from "../../assets/images/icon_profile_comment.png";

function ReplyLayout({ commentData }) {

  // 날짜 차이를 계산해주는 함수
  const getTimeDifference = (createdTimeData) => {
    const nowTime = new Date();
    const createdTime = createdTimeData.replace("T", " ");
    const dateCreatedTime = new Date(createdTime.toString());
    // 초 (밀리초)
    const seconds = 1;
    // 분
    const minute = seconds * 60;
    // 시
    const hour = minute * 60;
    // 일
    const day = hour * 24;
    // 달
    const month = day * 30;
    //년
    const year = month * 12;

    var elapsedTime = Math.trunc((nowTime.getTime() - dateCreatedTime.getTime()) / 1000);
    var elapsedText = "";
    if (elapsedTime < seconds) {
      elapsedText = "방금 전";
    } else if (elapsedTime < minute) {
      elapsedText = elapsedTime + "s";
    } else if (elapsedTime < hour) {
      elapsedText = Math.trunc(elapsedTime / minute) + "m";
    } else if (elapsedTime < day) {
      elapsedText = Math.trunc(elapsedTime / hour) + "h";
    } else if (elapsedTime < month) {
      elapsedText = Math.trunc(elapsedTime / day) + "d";
    } else if (elapsedTime < year) {
      elapsedText = Math.trunc(elapsedTime / month) + "m";
    }
    return elapsedText;
  };
  
  return (
    <>
      <ReplyWrapper>
        <ReplyImg src={commentData.writerImage} alt="replyComment" />
        <ReplySection>
          <ReplyMainContainer>
            <p>
              {commentData.writerNickname}
              <small>{commentData.content}</small>
            </p>
          </ReplyMainContainer>
          <ReplySubContainer>
            <small>{getTimeDifference(commentData.createdTime)}</small>
            <small>답글</small>
            <img src={heartIcon} alt="heartIcon" />
            <small>{commentData.like}</small>
          </ReplySubContainer>
        </ReplySection>
      </ReplyWrapper>
    </>
  );
}

export default ReplyLayout;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.4rem;
  padding-bottom: 1.5rem;
`;
const ReplyImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  margin-top: 0.3rem;
  margin-right: 1.4rem;

  border-radius: 5rem;
`;
const ReplySection = styled.section`
  display: flex;
  flex-direction: column;
`;
const ReplyMainContainer = styled.div`
  margin-bottom: 0.8rem;
  & > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    & > small {
      margin-left: 0.8rem;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
const ReplySubContainer = styled.div`
  display: flex;

  & > small {
    margin-right: 1.4rem;

    color: #616161;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
  & > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
`;
