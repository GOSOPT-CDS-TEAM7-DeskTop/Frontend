import { styled } from "styled-components";
import MasonryLayout from "../layouts/MasonryLayout";

const SaveArticleSection = () => {
  return (
    <SaveArticleSectionWrapper>
      <span>
        <h1>정리되지 않은 아이디어</h1>
        <button type="button">정리하기</button>
      </span>
      <MansoryWrapper>
      <MasonryLayout />
      </MansoryWrapper>
    </SaveArticleSectionWrapper>
  );
};

export default SaveArticleSection;

const SaveArticleSectionWrapper = styled.section`
  margin: 0 15rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 4rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.pinterest_black};
    ${({ theme }) => theme.fonts.pinterest_header1};
  }

  button {
    padding: 1.2rem 1.5rem;

    border: none;
    border-radius: 7.3rem;

    color: ${({ theme }) => theme.colors.pinterest_black};
    background-color: ${({ theme }) => theme.colors.pinterest_gray};

    ${({ theme }) => theme.fonts.pinterest_header2};
  }
`;

const MansoryWrapper = styled.section`
  width: 100%;
  padding: 0 6rem;
`;