import { styled } from "styled-components";
import MasonryLayout from "../components/layouts/MasonryLayout";
import HeaderBar from "../components/layouts/HeaderBar";
import articleHooks from "../hooks/articleHooks";
import QuestionMark from "../components/common/QuestionMark";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../src/atoms/atom";

interface User {
  code: number;
  message: string;
  data: UserData;
}

interface UserData {
  userImage: string;
  nickname: string;
  account: string;
  following: number;
}
function Home() {
  const [userData, setUserData] = useRecoilState(userDataAtom);

  const getUserData = async () => {
    try {
      const res = await axios.get<User>("https://team7.collab-pinterest.p-e.kr/user");
      console.log(res.data);
      setUserData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData);

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
