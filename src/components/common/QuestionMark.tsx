import styled from "styled-components";

const QuestionMark = () => {
  return (
    <QuestionMarkWrapper>
      <button type="button">
        <img src="../../src/assets/icon/questionmark.svg" alt="questionmark_icon" />
      </button>
    </QuestionMarkWrapper>
  );
};

export default QuestionMark;

const QuestionMarkWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;

  button {
    position: relative;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.pinterest_white};
    box-shadow: 0 0 1.1rem rgba(0, 0, 0, 0.15);
  }

`;
