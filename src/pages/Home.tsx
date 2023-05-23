import { styled } from "styled-components";
import MasonryLayout from "../components/layouts/MasonryLayout";
import HeaderBar from "../components/layouts/HeaderBar";
import axios from "axios";
import { useEffect } from "react";

function Home() {
  const getAllArticle = async () => {
    try {
      const res = await axios.get("http://13.209.7.118:8080/pin");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllArticle();
  });

  return (
    <>
      <HeaderBar />
      <MasonryWrapper>
        <MasonryLayout />
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
