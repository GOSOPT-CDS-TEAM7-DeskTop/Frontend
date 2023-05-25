import styled from "styled-components";

function PinUploadWebsite() {
  return (
    <PinUploadWebsiteWrapper>
      <PinUploadWebsiteBlock>
        <PinUploadWebsiteInput type="text" placeholder="웹사이트 주소를 입력해주세요" />
      </PinUploadWebsiteBlock>
      <PinUploadWebsiteBtn>사이트에서 사진 저장하기</PinUploadWebsiteBtn>
    </PinUploadWebsiteWrapper>
  );
}

export default PinUploadWebsite;

const PinUploadWebsiteWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 6rem 5.2rem 6rem;
  padding: 1.2rem 1.8rem 1.2rem 2rem;

  border-radius: 2.7rem;
  background-color: ${({ theme }) => theme.colors.pinterest_gray};
`;

const PinUploadWebsiteBlock = styled.div`
  flex: 1;
`;
const PinUploadWebsiteInput = styled.input`
  width: 100%;

  border: none;
  background-color: transparent;

  outline: none;
`;
const PinUploadWebsiteBtn = styled.button`
  padding: 0.6rem 1rem;

  border-radius: 1.5rem;

  background-color: ${({ theme }) => theme.colors.pinterest_white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.6rem;

  cursor: pointer;
`;
