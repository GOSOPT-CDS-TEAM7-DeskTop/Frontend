import styled, { css } from "styled-components";
import IcUpload from "../../assets/icon/icon_upload.svg";
import IcUploadImg from "../../assets/icon/icon_uploadImg.svg";
import { ReactNode } from "react";

interface PinUploadLayoutProps {
  children: ReactNode;
}
function PinUploadLayout({ children }: PinUploadLayoutProps) {
  return (
    <PinUploadLayoutWrapper>
      <PinUploadBtnWrapper>
        <PinUploadBtn type="button" color="white">
          <img src={IcUpload} alt="upload" />
        </PinUploadBtn>
        <PinUploadBtn type="button">
          <img src={IcUploadImg} alt="uploadImg" />
        </PinUploadBtn>
      </PinUploadBtnWrapper>
      {children}
    </PinUploadLayoutWrapper>
  );
}

export default PinUploadLayout;

const PinUploadLayoutWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100vh;
  margin-top: 2.4rem;

  background-color: ${({ theme }) => theme.colors.pinterest_background};
`;
const PinUploadBtnWrapper = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;

  display: flex;
  flex-direction: column;
`;
const PinUploadBtn = styled.button<{ color?: string }>`
  width: 4rem;
  height: 6rem;

  border-radius: 0.8rem;

  cursor: pointer;

  ${({ color }) =>
    color
      ? css`
          background-color: ${({ theme }) => theme.colors.pinterest_white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.pinterest_gray};
        `}

  &+& {
    margin-top: 1.6rem;
  }
`;
