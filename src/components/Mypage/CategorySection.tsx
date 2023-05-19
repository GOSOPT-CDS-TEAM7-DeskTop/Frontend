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
        <CardContainer>
          <img src="../../src/assets/images/category_img_1.svg" alt="card_image_1" />
          <h2>모든 핀</h2>
          <CardInfo>
            <p>핀 124개</p>
            <p>13주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_2.svg" alt="card_image_2" />
          <h2>해커톤</h2>
          <CardInfo>
            <p>핀 16개</p>
            <p>13주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_3.svg" alt="card_image_3" />
          <h2>랜딩페이지</h2>
          <CardInfo>
            <p>핀 17개</p>
            <p>21주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_4.svg" alt="card_image_4" />
          <h2>프레젠테이션</h2>
          <CardInfo>
            <p>핀 12개</p>
            <p>24주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_5.svg" alt="card_image_5" />
          <h2>팜플렛</h2>
          <CardInfo>
            <p>핀 3개</p>
            <p>25주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_6.svg" alt="card_image_6" />
          <h2>명함 디자인</h2>
          <CardInfo>
            <p>핀 17개</p>
            <p>21주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_7.svg" alt="card_image_7" />
          <h2>UI 디자인</h2>
          <CardInfo>
            <p>핀 17개</p>
            <p>35주</p>
          </CardInfo>
        </CardContainer>
        <CardContainer>
          <img src="../../src/assets/images/category_img_8.svg" alt="card_image_8" />
          <h2>대시보드 디자인</h2>
          <CardInfo>
            <p>핀 18개</p>
            <p>21주</p>
          </CardInfo>
        </CardContainer>
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

  margin: 4.5rem 4.9rem;
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

  width:180.8rem;

  margin: 0 11rem 2.4rem 11rem;

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

  img {
    width: 21.2rem;
    height: 14rem;

    border-radius: 1.2rem;
  }
`;

const CardContainer = styled.div`
  position: relative;

  width: 21.2rem;
  height: 14rem;

  margin-bottom: 4.5rem;

  h2 {
    position: absolute;
    top: 60%;
    left: 6.6%;

    color: ${({ theme }) => theme.colors.pinterest_white};
    ${({ theme }) => theme.fonts.pinterest_header1};
  }
`;

const CardInfo = styled.span`
  display: flex;
  position: absolute;

  top: 80.71%;
  left: 6.6%;

  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.pinterest_white};
  ${({ theme }) => theme.fonts.pinterest_header4};
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;

  background-color: #cdcdcd;
`;
