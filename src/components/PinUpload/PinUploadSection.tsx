import styled from "styled-components";
import PinUploadImg from "./PinUploadImg";
import PinUploadInput from "./PinUploadInput";
import PinUploadWebsite from "./PinUploadWebsite";

interface PinUploadSectionProps {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  content: string;
}
function PinUploadSection(props: PinUploadSectionProps) {
  const { handleChangeInput, title, content } = props;
  return (
    <>
      <PinUploadSectionWrapper>
        <PinUploadImg />
        <PinUploadInput handleChangeInput={handleChangeInput} title={title} content={content} />
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
