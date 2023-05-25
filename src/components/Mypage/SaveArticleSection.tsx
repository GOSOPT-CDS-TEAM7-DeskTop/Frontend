import { styled } from "styled-components";
import MasonryLayout from "../layouts/MasonryLayout";
import axios from "axios";
import { useState, useEffect } from "react";

const SaveArticleSection = () => {
  const [articleData, setArticleData] = useState();

  const getPinnedArticle = async () => {
    try {
      const res = await axios.get("https://team7.collab-pinterest.p-e.kr/user/save");
      const pins = res.data.data;

      setArticleData(pins);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPinnedArticle();
    return () => {};
  }, []);

  return (
    <SaveArticleSectionWrapper>
      <span>
        <h1>정리되지 않은 아이디어</h1>
        <button type="button">정리하기</button>
      </span>
      <MasonryWrapper>
        <MasonryLayout ishome={false} articleData={articleData} />
      </MasonryWrapper>
    </SaveArticleSectionWrapper>
  );
};

export default SaveArticleSection;

const SaveArticleSectionWrapper = styled.section`
  margin: 0 6rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 3.6rem;

    margin-bottom: 2.6rem;
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

const MasonryWrapper = styled.section`
  width: 100%;
  padding: 0;
`;
