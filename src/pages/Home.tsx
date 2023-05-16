import { styled } from "styled-components";
import pinterestLogo from "../assets/images/pinterestLogo.png";
import dropDownBtn from "../assets/images/down_btn.png";
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

    ${({ theme }) => theme.fonts.pinterest_header1};
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.pinterest_black};
    font-size: 1.6rem;

    img {
      width: 1rem;
      height: 0.5rem;
      margin: 0;
    }
  }
`;
