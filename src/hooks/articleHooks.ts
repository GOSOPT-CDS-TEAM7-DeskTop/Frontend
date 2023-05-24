import { useEffect, useState } from "react";
import axios from "axios";

interface ITitle {
  title?: string;
}

const articleHooks = () => {
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
      const res = await axios.get(`https://team7.collab-pinterest.p-e.kr/pin/?title=${title}`);
      setArticleData(res.data.data.pins);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllArticle();
    return () => {};
  }, []);

  return { articleData, getAllArticle, searchArticle };
};

export default articleHooks;
