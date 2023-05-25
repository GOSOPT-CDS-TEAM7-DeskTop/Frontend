import React from "react";
import styled  from "styled-components";

interface ISaveBtnProps {
  children: React.ReactNode;
  setIsSaveBtnClicked: Function;
  isSaveBtnClicked: boolean;
  clickSaveBtn: Function;
}

interface IsSaveBtnClickedProps {
  isSaveBtnClicked: boolean;
}

function SaveBtn(props: ISaveBtnProps) {
  const { children, isSaveBtnClicked, setIsSaveBtnClicked, clickSaveBtn } = props;

  const toggleSaveBtn = () => {
    setIsSaveBtnClicked((isSaveBtnClicked: any) => !isSaveBtnClicked);
    clickSaveBtn();
  };
  return (
    <>
      <SaveBtnWrapper isSaveBtnClicked={isSaveBtnClicked} onClick={toggleSaveBtn}>
        {children}
      </SaveBtnWrapper>
    </>
  );
}

export default SaveBtn;

const SaveBtnWrapper = styled.button<IsSaveBtnClickedProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 6.4rem;

  border-radius: 5rem;
  border: 0;

  /* 색상 */
  background-color: ${({ theme, isSaveBtnClicked }) =>
    isSaveBtnClicked ? theme.colors.pinterest_black : theme.colors.pinterest_red};

  color: ${({ theme }) => theme.colors.pinterest_white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
