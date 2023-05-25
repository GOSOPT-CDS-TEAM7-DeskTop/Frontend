import styled from "styled-components";
import PinUploadImg from "./PinUploadImg";
import PinUploadInput from "./PinUploadInput";
import PinUploadWebsite from "./PinUploadWebsite";

function PinUploadSection() {
  return (
    <>
      <PinUploadSectionWrapper>
        <PinUploadImg />
        <PinUploadInput />
      </PinUploadSectionWrapper>
    </>
  );
}

export default PinUploadSection;

const PinUploadSectionWrapper = styled.div`
  display: flex;

  width: 100%;
  padding: 0 6rem;
`;
