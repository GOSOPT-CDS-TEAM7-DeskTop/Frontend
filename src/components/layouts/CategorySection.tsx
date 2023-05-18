import { styled } from "styled-components";

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
        <img src="../../src/assets/images/category_img_1.svg" alt="card_image_1" />
        <img src="../../src/assets/images/category_img_2.svg" alt="card_image_2" />
        <img src="../../src/assets/images/category_img_3.svg" alt="card_image_3" />
        <img src="../../src/assets/images/category_img_4.svg" alt="card_image_4" />
        <img src="../../src/assets/images/category_img_5.svg" alt="card_image_5" />
        <img src="../../src/assets/images/category_img_6.svg" alt="card_image_6" />
        <img src="../../src/assets/images/category_img_7.svg" alt="card_image_7" />
        <img src="../../src/assets/images/category_img_8.svg" alt="card_image_8" />
      </CardSection>
    </CategorySectionWrapper>
  );
};

export default CategorySection;

const CategorySectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin: 4.5rem 4.9rem;
`;

const CreatedStoredWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.6rem;

  flex-direction: row;
  justify-content: center;
  align-items: center;

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
  color: ${({ theme }) => theme.colors.pinterest_black};
  ${({ theme }) => theme.fonts.pinterest_header2};
  border-bottom: 0.3rem;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.colors.pinterest_black};
  padding-bottom: 0.8rem;
`;

const FilterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  gap: 1.6rem;

  img {
    width: 21.2rem;
    height: 14rem;

    border-radius: 1.2rem;
  }
`;
