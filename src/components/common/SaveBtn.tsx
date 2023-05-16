import styled from "styled-components";

type SaveBtnProps = {
  setIsSaveBtnClicked: Function;
  isSaveBtnClicked: boolean;
};

function SaveBtn(props: SaveBtnProps) {
  const { isSaveBtnClicked, setIsSaveBtnClicked } = props;
  const toggleSaveBtn = () => {
    setIsSaveBtnClicked((isSaveBtnClicked: any) => !isSaveBtnClicked);
  };
  return (
    <>
      {isSaveBtnClicked ? (
        <SaveBtnWrapper onClick={toggleSaveBtn} savedBtn>
          저장됨
        </SaveBtnWrapper>
      ) : (
        <SaveBtnWrapper onClick={toggleSaveBtn}>저장</SaveBtnWrapper>
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
  background-color: ${(props) => (props.savedBtn ? "#000000" : "#E60022")};
  color: #ffffff;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.8rem;
`;
