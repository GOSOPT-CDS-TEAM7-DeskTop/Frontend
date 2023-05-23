import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import IMAGE from "../../assets/images/images";
import ArticleBrick from "../common/ArticleBrick";

function MasonryLayout() {
  return (
    <>
      <MasonryInfiniteGrid gap={5}>
        {IMAGE.map((src) => (
          <ArticleBrick imgSrc={src} />
        ))}
      </MasonryInfiniteGrid>
    </>
  );
}

export default MasonryLayout;
