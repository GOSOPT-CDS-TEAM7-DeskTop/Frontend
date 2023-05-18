import { useState } from "react";
import SaveBtn from "../components/common/SaveBtn";
import FollowBtn from "../components/common/PinDetail/FollowBtn";

function PinDetail() {
  const [isSaveBtnClicked, setIsSaveBtnClicked] = useState(false);
  const [isFollowBtnClicked, setIsFollowBtnClicked] = useState(false);

  return (
    <>
      <SaveBtn isSaveBtnClicked={isSaveBtnClicked} setIsSaveBtnClicked={setIsSaveBtnClicked} />
      <FollowBtn isFollowBtnClicked={isFollowBtnClicked} setIsFollowBtnClicked={setIsFollowBtnClicked} />
    </>
  );
}

export default PinDetail;
