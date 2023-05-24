import { styled } from "styled-components";
import MasonryLayout from "../components/layouts/MasonryLayout";
import HeaderBar from "../components/layouts/HeaderBar";
import axios from "axios";
import { useEffect, useState } from "react";

interface ITitle {
  title: string;
}

function Home() {
  const [articleData, setArticleData] = useState();

  const getAllArticle = async () => {
    try {
      const res = await axios.get("https://team7.collab-pinterest.p-e.kr/pin");
      setArticleData(res.data.data.pins);
    } catch (err) {
      console.log(err);
    }
  };
  const searchArticle = async (title: ITitle) => {
    try {
      const res = await axios.get(`https://team7.collab-pinterest.p-e.k/pin/?title=${title}`);
      setArticleData(res.data.data.pins);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllArticle();
  }, []);

  return (
    <>
      <HeaderBar searchArticle={searchArticle} />
      <MasonryWrapper>
        <MasonryLayout ishome={true} articleData={articleData} getAllArticle={getAllArticle} />
      </MasonryWrapper>
    </>
  );
}

export default Home;

const MasonryWrapper = styled.section`
  width: 175rem;
  padding-top: 0.8rem;
  margin: 0 auto;
`;
