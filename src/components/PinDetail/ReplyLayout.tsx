import React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/icon/icon_heart.png";
import userProfile from "../../assets/images/icon_profile_comment.png";
const ReplyLayout = () => {
  // **서버에서 받아오는 댓글 관련 정보
  //- 댓글 고유 식별 번호 (PK)
  // - 내용
  // - 좋아요 수
  // - 댓글 작성 시간 → 클라이언트 쪽에서 계산
  // - 작성자 정보
  //     - 아이디
  //     - 프로필 이미지 url
  const dummyReply = [
    {
      replyId: 0,
      replyContent: "I love the view!",
      replyHeartNum: 3,
      replyTime: "6mo",
      replyUser: [
        {
          userName: "SOPT_DESIGN",
          userProfile: "../../assets/images/icon_profile_comment.png",
        },
      ],
    },
  ];

  return (
    <>
      <ReplyWrapper>
        <ReplyImg src={userProfile} alt="replyComment" />
        <ReplySection>
          <ReplyMainBox>
            <p>{dummyReply[0].replyUser[0].userName}</p>
            <small>{dummyReply[0].replyContent}</small>
          </ReplyMainBox>
          <ReplySubBox>
            <small>{dummyReply[0].replyTime}</small>
            <small>답글</small>
            <img src={heartIcon} alt="heartIcon" />
            <small>{dummyReply[0].replyHeartNum}</small>
          </ReplySubBox>
        </ReplySection>
      </ReplyWrapper>
    </>
  );
};

export default ReplyLayout;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.4rem;
`;
const ReplyImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  margin-top: 0.3rem;
  margin-right: 1.4rem;
`;
const ReplySection = styled.section`
  display: flex;
  flex-direction: column;
`;
const ReplyMainBox = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  & > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin-right: 0.8rem;
  }
  & > small {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
`;
const ReplySubBox = styled.div`
  display: flex;

  & > small {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #616161;
    margin-right: 1.4rem;
  }
  & > img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
`;
