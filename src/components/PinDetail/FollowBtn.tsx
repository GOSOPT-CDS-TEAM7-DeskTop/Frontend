import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

type FollowBtnProps = {
  setIsFollowBtnClicked: Function;
  isFollowBtnClicked: boolean;
};

function FollowBtn(props: FollowBtnProps) {
  const { isFollowBtnClicked, setIsFollowBtnClicked } = props;
  const themeContext = useContext(ThemeContext);

  const toggleFollowBtn = () => {
    setIsFollowBtnClicked((isFollowBtnClicked: any) => !isFollowBtnClicked);
  };

  return (
    <>
      <>
        {isFollowBtnClicked ? (
          <FollowBtnWrapper
            onClick={toggleFollowBtn}
            color={themeContext["colors"]["pinterest_black"]}
            backgroundColor={themeContext["colors"]["pinterest_lightgray"]}>
            팔로우
          </FollowBtnWrapper>
        ) : (
          <FollowBtnWrapper
            onClick={toggleFollowBtn}
            color={themeContext["colors"]["pinterest_white"]}
            backgroundColor={themeContext["colors"]["pinterest_black"]}>
            팔로잉
          </FollowBtnWrapper>
        )}
      </>
    </>
  );
}

export default FollowBtn;
const FollowBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 6.4rem;

  border-radius: 5rem;
  border: 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
