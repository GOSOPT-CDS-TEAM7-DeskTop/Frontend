import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { userDataAtom } from "../../atoms/atom";
import { useState } from "react";

function PinUploadInput() {
  const [count, setCount] = useState(0);
  const { userImage, nickname } = useRecoilValue(userDataAtom);

  const handleTextareaCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length);
  };

  return (
    <PinUploadInputWrapper>
      <PinUploadInputBox type="text" placeholder="제목추가" header="true" />
      <PinUploadInputBox type="text" placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요 😀" />
      <PinUploadUserBlock>
        <PinUploadUserImg src={userImage} alt="userImage" />
        <PinUploadUserText>{nickname}</PinUploadUserText>
      </PinUploadUserBlock>
      <PinUploadInputBox type="text" placeholder="랜딩페이지 링크 추가" />
      <PinUploadTextarea
        maxLength={500}
        placeholder="사진에 대한 간단한 설명을 적어주세요."
        onChange={handleTextareaCount}
      />
      <PinUploadTextareaTextBlock>
        <PinUploadTextareaText>더 많은 사람들이 회원님의 핀을 구경할 수 있을 거예요!</PinUploadTextareaText>
        <PinUploadTextareaTextWord>{count}</PinUploadTextareaTextWord>
      </PinUploadTextareaTextBlock>
    </PinUploadInputWrapper>
  );
}

export default PinUploadInput;

const PinUploadInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

const PinUploadInputBox = styled.input<{ header?: string; marginTop?: string }>`
  width: 100%;
  padding-bottom: 1rem;

  border: none;
  border-bottom: 0.1rem solid #c6c6c6;

  outline: none;

  ${({ header }) =>
    header === "true"
      ? css`
          margin-top: 5.4rem;
          ${({ theme }) => theme.fonts.pinterest_header1}
        `
      : css`
          ${({ theme }) => theme.fonts.pinterest_header2}
        `}
  & + & {
    margin-top: 3.5rem;
  }

  &:focus {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.pinterest_blue};
  }
`;

const PinUploadTextarea = styled.textarea`
  height: 3rem;
  margin-top: 3.5rem;

  border: none;
  border-bottom: 0.1rem solid #c6c6c6;
  ${({ theme }) => theme.fonts.pinterest_header2}

  resize: none;
  outline: none;
`;
const PinUploadTextareaTextBlock = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;

  ${({ theme }) => theme.fonts.pinterest_header4}
  color : 
  ${({ theme }) => theme.colors.pinterest_deepgray};
`;
const PinUploadTextareaText = styled.span``;
const PinUploadTextareaTextWord = styled.span``;

const PinUploadUserBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 3.2rem 0 8.8rem 0.6rem;
`;
const PinUploadUserImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 0.6rem;

  border-radius: 5.5rem;
`;
const PinUploadUserText = styled.span`
  ${({ theme }) => theme.fonts.pinterest_header3};
  color: #111111;
`;
