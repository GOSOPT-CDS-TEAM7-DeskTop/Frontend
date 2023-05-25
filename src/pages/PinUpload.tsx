import PinUploadBox from "../components/PinUpload/PinUploadBox";
import QuestionMark from "../components/common/QuestionMark";
import HeaderBar from "../components/layouts/HeaderBar";
import PinUploadLayout from "../components/layouts/PinUploadLayout";

function PinUpload() {
  return (
    <>
      <HeaderBar />
      <PinUploadLayout>
        <PinUploadBox />
      </PinUploadLayout>
      <QuestionMark />
    </>
  );
}

export default PinUpload;
