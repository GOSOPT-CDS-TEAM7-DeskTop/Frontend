import React from "react";
import styled from "styled-components";

interface IFollowBtnProps {
  children: React.ReactNode;
  setIsFollowBtnClicked: Function;
  isFollowBtnClicked: boolean;
}

interface IsFollowBtnProps {
  isFollowBtnClicked: boolean;
}

function FollowBtn(props: IFollowBtnProps) {
  const { children, isFollowBtnClicked, setIsFollowBtnClicked } = props;

  const toggleFollowBtn = () => {
    setIsFollowBtnClicked((isFollowBtnClicked: IsFollowBtnProps) => !isFollowBtnClicked);
  };
  return (
    <>
      <FollowBtnWrapper isFollowBtnClicked={isFollowBtnClicked} onClick={toggleFollowBtn}>
        {children}
      </FollowBtnWrapper>
    </>
  );
}

export default FollowBtn;

const FollowBtnWrapper = styled.button<IsFollowBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 6.4rem;

  border-radius: 5rem;
  border: 0;

  /* 색상 */
  color: ${({ theme, isFollowBtnClicked }) =>
    isFollowBtnClicked ? theme.colors.pinterest_white : theme.colors.pinterest_black};
  background-color: ${({ theme, isFollowBtnClicked }) =>
    isFollowBtnClicked ? theme.colors.pinterest_black : theme.colors.pinterest_lightgray};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
