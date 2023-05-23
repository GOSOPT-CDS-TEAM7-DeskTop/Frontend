import { useEffect, useState } from "react";
import SaveBtn from "../components/PinDetail/SaveBtn";
import FollowBtn from "../components/PinDetail/FollowBtn";

function PinDetail() {
  const [isSaveBtnClicked, setIsSaveBtnClicked] = useState(false);
  const [isFollowBtnClicked, setIsFollowBtnClicked] = useState(false);

  return (
    <>
      <SaveBtn isSaveBtnClicked={isSaveBtnClicked} setIsSaveBtnClicked={setIsSaveBtnClicked}>
        {isSaveBtnClicked ? "저장됨" : "저장"}
      </SaveBtn>

      <FollowBtn isFollowBtnClicked={isFollowBtnClicked} setIsFollowBtnClicked={setIsFollowBtnClicked}>
        {isFollowBtnClicked ? "팔로잉" : "팔로우"}
      </FollowBtn>
    </>
  );
}

export default PinDetail;
