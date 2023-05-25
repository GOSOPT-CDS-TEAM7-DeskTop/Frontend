import { styled } from "styled-components";
import MasonryLayout from "../components/layouts/MasonryLayout";
import HeaderBar from "../components/layouts/HeaderBar";
import articleHooks from "../hooks/articleHooks";
import QuestionMark from "../components/common/QuestionMark";
import userDataHooks from "../hooks/userDataHooks";

function Home() {

  const { articleData, getAllArticle, searchArticle } = articleHooks();
  

  return (
    <>
      <HeaderBar searchArticle={searchArticle} />
      <MasonryWrapper>
        <MasonryLayout ishome={true} articleData={articleData} getAllArticle={getAllArticle} />
      </MasonryWrapper>
      <QuestionMark />
    </>
  );
}

export default Home;

const MasonryWrapper = styled.section`
  width: 175rem;
  padding-top: 0.8rem;
  margin: 0 auto;
`;
