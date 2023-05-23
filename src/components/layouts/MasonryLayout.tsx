import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import ArticleBrick from "../common/ArticleBrick";

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
  isHome: boolean;
  articleData?: IHomeArticle[] | IMypageArticle[];
}

function MasonryLayout({ isHome, articleData }: IMasonryInfiniteGridProps) {
  return (
    <>
      <MasonryInfiniteGrid gap={isHome ? 5 : 1.6}>
        {articleData?.map(({ id, image }) => (
          <ArticleBrick key={id} imgSrc={image} isHome={isHome}/>
        ))}
      </MasonryInfiniteGrid>
    </>
  );
}

export default MasonryLayout;
