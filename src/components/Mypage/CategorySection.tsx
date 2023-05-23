import React from 'react';
import { styled } from "styled-components";
import CardContainer from './CardContainer';

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
        <CardContainer
          imgSrc="../../src/assets/images/category_img_1.svg" alt="card_image_1" 
          title="모든 핀"
          info={["핀 124개", "13주"]}
          />   
        <CardContainer
          imgSrc="../../src/assets/images/category_img_2.svg" alt="card_image_2"
          title="해커톤"
          info={["핀 16개", "13주"]}
           /> 
        <CardContainer
          imgSrc="../../src/assets/images/category_img_3.svg" alt="card_image_3" 
          title="랜딩페이지"
          info={["핀 17개", "21주"]}
          />
        <CardContainer
          imgSrc="../../src/assets/images/category_img_4.svg" alt="card_image_4" 
          title="프레젠테이션"
          info={["핀 12개", "24주"]}
          />
        <CardContainer
          imgSrc="../../src/assets/images/category_img_5.svg" alt="card_image_5" 
          title="팜플렛"
          info={["핀 3개", "25주"]}
          />
        <CardContainer
          imgSrc="../../src/assets/images/category_img_6.svg" alt="card_image_6" 
          title="명함 디자인"
          info={["핀 17개", "21주"]}
          />
        <CardContainer
          imgSrc="../../src/assets/images/category_img_7.svg" alt="card_image_7" 
          title="UI 디자인"
          info={["핀 17개", "35주"]}
          />
        <CardContainer
          imgSrc="../../src/assets/images/category_img_8.svg" alt="card_image_8" 
          title="대시보드 디자인"
          info={["핀 18개", "21주"]}
          />
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

  width:180.8rem;

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

  img {
    width: 21.2rem;
    height: 14rem;

    border-radius: 1.2rem;
  }
`;

/*
const CardContainer = styled.div`
  position: relative;

  width: 21.2rem;
  height: 14rem;

 

  h2 {
    position: absolute;
    top: 60%;
    left: 6.6%;

    color: ${({ theme }) => theme.colors.pinterest_white};
    ${({ theme }) => theme.fonts.pinterest_header1};
  }
`;
*/

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
