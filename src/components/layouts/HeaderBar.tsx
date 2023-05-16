import { styled } from "styled-components";
import pinterestLogo from "../../assets/images/pinterestLogo.png";
import BtnDropDown from "../../assets/images/btn_down.png";
import readingGlasses from "../../assets/images/readingGlasses.png";
import btnAlarm from "../../assets/images/btn_alarm.png";
import btnMessage from "../../assets/images/btn_message.png";
import btnProfile from "../../assets/images/btn_profile.png";
import btnArrowDown from "../../assets/images/btn_arrow_down.png";

function HeaderBar() {
  return (
    <>
      <HeaderBarWrapper>
        <NavSection>
          <img src={pinterestLogo} alt="pinterestLogo"></img>
          <button>
            만들기
            <img src={BtnDropDown} alt="dropDownBtn"></img>
          </button>
        </NavSection>
        <SearchSection>
          <input placeholder="핀 검색"></input>
          <img src={readingGlasses} alt="readingGlasses" />
        </SearchSection>
        <ManageSection>
          <img src={btnAlarm} alt="readingGlasses" />
          <img src={btnMessage} alt="btnMessage" />
          <ProfileImg>
            <img src={btnProfile} />
          </ProfileImg>
          <img src={btnArrowDown} alt="btnArrowDown" />
        </ManageSection>
      </HeaderBarWrapper>
    </>
  );
}

export default HeaderBar;

const HeaderBarWrapper = styled.header`
  display: flex;
  flex-direction: row;

  height: 5rem;
  margin: 2.1rem 4.9rem 0 4.8rem;
`;

const NavSection = styled.nav`
  display: flex;
  flex-direction: row;

  width: 8%;

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

  width: 82%;

  input {
    width: 100%;
    height: 100%;
    padding: 1.4rem 8.2rem 1.4rem 4.2rem;
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

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12.2rem;

    width: 0.2rem;
    height: 3.2rem;

    background-color: #d8d8d8;
  }
`;

const ManageSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 10%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 5.2rem;
    height: 5.2rem;
  }
`;

const ProfileImg = styled.div`
  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;

    /** 프로필이미지 데이터 연결과정에서 삭제할 border */
    border: blue solid 1px;
  }
`;
