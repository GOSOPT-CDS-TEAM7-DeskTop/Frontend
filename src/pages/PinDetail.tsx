import { useState } from "react";
import SaveBtn from "../components/PinDetail/SaveBtn";
import FollowBtn from "../components/PinDetail/FollowBtn";

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
