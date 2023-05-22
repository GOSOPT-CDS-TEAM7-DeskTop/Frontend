import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

type SaveBtnProps = {
  setIsSaveBtnClicked: Function;
  isSaveBtnClicked: boolean;
};

function SaveBtn(props: SaveBtnProps) {
  const { isSaveBtnClicked, setIsSaveBtnClicked } = props;
  const themeContext = useContext(ThemeContext);

  const toggleSaveBtn = () => {
    setIsSaveBtnClicked((isSaveBtnClicked: any) => !isSaveBtnClicked);
  };
  return (
    <>
      {isSaveBtnClicked ? (
        <SaveBtnWrapper onClick={toggleSaveBtn} backgroundColor={themeContext["colors"]["pinterest_black"]}>
          저장됨
        </SaveBtnWrapper>
      ) : (
        <SaveBtnWrapper onClick={toggleSaveBtn} backgroundColor={themeContext["colors"]["pinterest_red"]}>
          저장
        </SaveBtnWrapper>
      )}
    </>
  );
}

export default SaveBtn;
const SaveBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 6.4rem;

  border-radius: 5rem;
  border: 0;
  background-color: ${(props) => props.backgroundColor};
  color: ${({ theme }) => theme.colors.pinterest_white};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
