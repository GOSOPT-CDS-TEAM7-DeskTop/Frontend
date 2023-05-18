import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import IMAGE from "../../assets/images/images";
import ArticleBrick from "../Home/ArticleBrick";

function MasonryLayout() {
  return (
    <>
      <MasonryInfiniteGrid className="container" gap={5}>
        {IMAGE.map((src) => (
          <ArticleBrick imgSrc={src} />
        ))}
      </MasonryInfiniteGrid>
    </>
  );
}

export default MasonryLayout;
