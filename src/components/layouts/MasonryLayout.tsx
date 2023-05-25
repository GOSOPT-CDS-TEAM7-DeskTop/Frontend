import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import ArticleBrick from "../common/ArticleBrick";
import { Link } from "react-router-dom";

interface IMypageArticle {
  pinId: number;
  pinImage: string;
}

interface IHomeArticle {
  altTxt: string;
  content: string;
  createdTime: string;
  renderUrl: string;
  title: string;
  writerFollower: number;
  writerImage: string;
  writerNickname: string;
  id: number;
  image: string;
}

interface IMasonryInfiniteGridProps {
  ishome: boolean;
  articleData?: IHomeArticle[] | IMypageArticle[];
  getAllArticle?: () => void;
}

function MasonryLayout({ ishome, articleData, getAllArticle }: IMasonryInfiniteGridProps) {
  return (
    <>
      <MasonryInfiniteGrid
        gap={ishome ? 5 : 1.6}
        // onRequestAppend={() => {
        //   getAllArticle();
        // }}
      >
        {ishome
          ? articleData?.map(({ id, image }: any) => (
              <Link
                key={id}
                to={{
                  pathname: `/pin/${id}`,
                }}>
                <ArticleBrick imgSrc={image} ishome={ishome} />
              </Link>
            ))
          : articleData?.map(({ pinId, pinImage }: any) => (
              <ArticleBrick key={pinId} imgSrc={pinImage} ishome={ishome} />
            ))}
      </MasonryInfiniteGrid>
    </>
  );
}

export default MasonryLayout;
