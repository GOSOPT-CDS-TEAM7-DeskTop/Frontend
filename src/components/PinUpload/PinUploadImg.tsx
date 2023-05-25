import styled from "styled-components";
import IcImageText from "../../assets/icon/icon_imageText.svg";

function PinUploadImg() {
  return (
    <PinUploadImgWrapper>
      <PinUploadInputLabel>
        <PinUploadInput type="file" />
        <PinUploadInputTextBlock>
          <img src={IcImageText} alt="imageText" />
          <PinUploadInputText>드래그하거나 클릭하여 업로드</PinUploadInputText>
          <PinUploadInputDesc>권장 사항: 20MB 미만의 고화질 .jpg 파일</PinUploadInputDesc>
        </PinUploadInputTextBlock>
      </PinUploadInputLabel>
    </PinUploadImgWrapper>
  );
}

export default PinUploadImg;

const PinUploadImgWrapper = styled.div`
  width: 34rem;
  margin-right: 4rem;
  padding: 1.1rem 1.2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.pinterest_gray};
`;
const PinUploadInputLabel = styled.label``;

const PinUploadInputTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 17.9rem 1.5rem 17.5rem 1.5rem;

  border: 0.2rem dashed #dadada;
  border-radius: 0.8rem;
`;
const PinUploadInputText = styled.span`
  margin-top: 1.6rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2.6rem;
`;
const PinUploadInputDesc = styled.span`
  margin-top: 0.8rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;

  color: ${({ theme }) => theme.colors.pinterest_deepgray};
`;
const PinUploadInput = styled.input`
  display: none;
`;
