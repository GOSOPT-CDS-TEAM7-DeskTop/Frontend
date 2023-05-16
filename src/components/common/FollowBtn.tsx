import styled from "styled-components";

type FollowBtnProps = {
  setIsFollowBtnClicked: Function;
  isFollowBtnClicked: boolean;
};

function FollowBtn(props: FollowBtnProps) {
  const { isFollowBtnClicked, setIsFollowBtnClicked } = props;
  const toggleFollowBtn = () => {
    setIsFollowBtnClicked((isFollowBtnClicked: any) => !isFollowBtnClicked);
  };
  return (
    <>
      <>
        {isFollowBtnClicked ? (
          <FollowBtnWrapper onClick={toggleFollowBtn} followedBtn>
            팔로우
          </FollowBtnWrapper>
        ) : (
          <FollowBtnWrapper onClick={toggleFollowBtn}>팔로잉</FollowBtnWrapper>
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
  background-color: ${(props) => (props.followedBtn ? "#EDEDED" : "#000000")};
  color: ${(props) => (props.followedBtn ? "#000000" : "#FFFFFF")};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
