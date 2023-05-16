import { styled } from "styled-components";
import pinterestLogo from "../assets/images/pinterestLogo.png";
import dropDownBtn from "../assets/images/btn_down.png";
import readingGlasses from "../assets/images/readingGlasses.png";
function Home() {
  return (
    <>
      <HeaderBarWrapper>
        <NavSection>
          <img src={pinterestLogo} alt="pinterestLogo"></img>
          <button>
            만들기
            <img src={dropDownBtn} alt="dropDownBtn"></img>
          </button>
        </NavSection>
        <SearchSection>
          <input placeholder="핀 검색"></input>
          <img src={readingGlasses} alt="readingGlasses" />
        </SearchSection>
        {/* <ManageSection>

        </ManageSection> */}
      </HeaderBarWrapper>
    </>
  );
}

export default Home;

const HeaderBarWrapper = styled.header`
  display: flex;
  flex-direction: row;

  height: 5rem;
  margin: 2.1rem 4.9rem 0 4.8rem;

  border: 2px solid black;
`;

const NavSection = styled.nav`
  display: flex;
  flex-direction: row;
  border: 2px solid salmon;

  img {
    margin: 1rem 2.6rem 0.8rem 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: 0.7rem;
    padding: 0;

    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.pinterest_black};
    ${({ theme }) => theme.fonts.pinterest_header1};
    font-size: 1.6rem;

    img {
      width: 1rem;
      height: 0.5rem;
      margin: 0;
    }
  }
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 70%;

  border: 2px solid pink;

  input {
    width: 100%;
    height: 100%;
    padding: 1.4rem 4.2rem;
    margin: 0 4rem 0 2.7rem;

    border: none;
    border-radius: 2.2rem;
    background: #e9e9e9;

    ${({ theme }) => theme.fonts.pinterest_header2};
    font-size: 1.6rem;
  }
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4.427rem;

    width: 1.685rem;
    height: 1.691rem;
  }
`;
