import { styled } from "styled-components";
import CardContainer from "./CardContainer";
import CardData from "./CardData";

const CategorySection = () => {
  return (
    <CategorySectionWrapper>
      <CreatedStoredWrapper>
        <Created>생성됨</Created>
        <Stored>저장됨</Stored>
      </CreatedStoredWrapper>
      <FilterSection>
        <img src="../../src/assets/icon/filter_icon.svg" alt="filter_icon" />
        <img src="../../src/assets/icon/plus_icon.svg" alt="plus_icon" />
      </FilterSection>
      <CardSection>
        {CardData.map((data, index) => {
          return <CardContainer key={index} imgSrc={data.imgSrc} alt={data.alt} title={data.title} info={data.info} />;
        })}
      </CardSection>
      <Line />
    </CategorySectionWrapper>
  );
};

export default CategorySection;

const CategorySectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4.5rem 5.6rem;
`;

const CreatedStoredWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 2.6rem;

  gap: 3rem;

  margin-bottom: 2.2rem;
`;

const Created = styled.div`
  height: 2.6rem;

  color: ${({ theme }) => theme.colors.pinterest_black};
  ${({ theme }) => theme.fonts.pinterest_header2};
`;

const Stored = styled.div`
  height: 2.6rem;

  border-bottom: 0.3rem;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.colors.pinterest_black};
  padding-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.pinterest_black};
  ${({ theme }) => theme.fonts.pinterest_header2};
`;

const FilterSection = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 180.8rem;

  margin-bottom: 2.4rem;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const CardSection = styled.section`
  display: flex;
  flex-direction: row;

  justify-content: center;

  width: 180.8rem;

  gap: 1.6rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;

  background-color: #cdcdcd;
`;
