import { styled } from "styled-components";

const CategorySection = () => {
  return (
    <CategorySectionWrapper>
      <CreatedStoredWrapper>
        <div>생성됨</div>
        <div>저장됨</div>
      </CreatedStoredWrapper>
    </CategorySectionWrapper>
  );
};

export default CategorySection;

const CategorySectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;
`;

const CreatedStoredWrapper = styled.div`
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 3rem;
  margin-bottom: 0.8rem;
`;
