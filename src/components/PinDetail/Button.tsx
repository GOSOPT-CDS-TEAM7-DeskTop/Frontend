import React from "react";
import styled, { css } from "styled-components";

interface IBtnProps {
  children: React.ReactNode;
  setIsSaveBtnClicked: Function;
  isSaveBtnClicked: boolean;
  setIsFollowBtnClicked: Function;
  IsFollowBtnClicked: boolean;
  initText: string;
}

function Button(props: IBtnProps) {
  const { isSaveBtnClicked, setIsSaveBtnClicked, IsFollowBtnClicked, setIsFollowBtnClicked, initText } = props;

  const toggleSaveBtn = () => {
    setIsSaveBtnClicked((isSaveBtnClicked: any) => !isSaveBtnClicked);
  };
  const toggleFollowBtn = () => {
    setIsFollowBtnClicked((IsFollowBtnClicked: any) => !IsFollowBtnClicked);
  };

  return (
    <>
      {initText === `save` ? (
        <BtnWrapper isSaveBtnClicked={isSaveBtnClicked} onClick={toggleSaveBtn}>
          {isSaveBtnClicked ? `저장` : `저장됨`}
        </BtnWrapper>
      ) : (
        <BtnWrapper IsFollowBtnClicked={IsFollowBtnClicked} onClick={toggleFollowBtn}>
          {IsFollowBtnClicked ? `팔로우` : `팔로잉`}
        </BtnWrapper>
      )}
    </>
  );
}

export default Button;
const BtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 6.4rem;

  border-radius: 5rem;
  border: 0;

  /* 색상 */
  ${(props: IBtnProps) => {
    const isBtnClicked = props.isBtnClicked;
    return css`
      color: ${({ theme }) => (isBtnClicked ? theme.colors.pinterest_white : theme.colors.pinterest_black)};
      background-color: ${({ theme }) =>
        isBtnClicked ? theme.colors.pinterest_black : theme.colors.pinterest_lightgray};
    `;
  }}

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
