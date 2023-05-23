import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import ArticleBrick from "../common/ArticleBrick";
import { Link } from "react-router-dom";

interface IMypageArticle {
  id: number;
  image: string;
}

interface IHomeArticle extends IMypageArticle {
  altTxt: string;
  content: string;
  createdTime: string;
  renderUrl: string;
  title: string;
  writerFollower: number;
  writerImage: string;
  writerNickname: string;
}

interface IMasonryInfiniteGridProps {
  ishome: boolean;
  articleData?: IHomeArticle[] | IMypageArticle[];
  getAllArticle: () => void;
}

function MasonryLayout({ ishome, articleData, getAllArticle }: IMasonryInfiniteGridProps) {
  return (
    <>
      <MasonryInfiniteGrid
        gap={ishome ? 5 : 1.6}
        onRequestAppend={() => {
          getAllArticle();
        }}>
        {ishome
          ? articleData?.map(({ id, image }) => (
              <Link
                to={{
                  pathname: `/pin/${id}`,
                }}>
                <ArticleBrick key={id} imgSrc={image} ishome={ishome} />
              </Link>
            ))
          : articleData?.map(({ id, image }) => <ArticleBrick key={id} imgSrc={image} ishome={ishome} />)}
      </MasonryInfiniteGrid>
    </>
  );
}

export default MasonryLayout;
