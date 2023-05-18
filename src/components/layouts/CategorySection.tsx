import { styled } from "styled-components";

const CategorySection = () => {
  return (
    <CategorySectionWrapper>
      <CreatedStoredWrapper>
        <Created>생성됨</Created>
        <Stored>저장됨</Stored>
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
  height: 2.6rem;

  flex-direction: row;
  justify-content: center;
  align-items: center;


  gap: 3rem;
  margin-bottom: 0.8rem;
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
  border-bottom: 0.3rem ;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.colors.pinterest_black};
  padding-bottom: 0.8rem;
  
`;