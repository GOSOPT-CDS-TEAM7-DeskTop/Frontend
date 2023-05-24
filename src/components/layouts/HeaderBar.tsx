import { styled } from "styled-components";
import pinterestLogo from "../../assets/images/btn_home.svg";
import BtnDropDown from "../../assets/icon/btn_down.svg";
import readingGlasses from "../../assets/icon/readingGlasses.svg";
import iconAlarm from "../../assets/icon/icon_alarm.svg";
import iconMessage from "../../assets/icon/icon _message.svg";
import userProfile from "../../assets/icon/user_Profile.svg";
import btnArrowDown from "../../assets/icon/btn_arrow_down.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface ITitle {
  title?: string;
}

interface ISearchArticle {
  searchArticle: (title: ITitle) => Promise<void>;
}

function HeaderBar({ searchArticle }: ISearchArticle) {
  /** 검색창 useRef */
  const inputRef = useRef<HTMLInputElement | null>(null);

  /** 아티클 검색 */
  const searchArticleFn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const title = inputRef.current?.value;
      searchArticle(title as ITitle);
    }
    return;
  };
  return (
    <>
      <HeaderBarWrapper>
        <NavSection>
          <Link to={{ pathname: "/home" }}>
            <img src={pinterestLogo} alt="pinterestLogo" />
          </Link>
          <Link to={{ pathname: "/pinupload" }} style={{ textDecoration: "none", textDecorationLine: "none" }}>
            <button type="button">
              만들기
              <img src={BtnDropDown} alt="dropDownBtn" />
            </button>
          </Link>
        </NavSection>
        <SearchSection>
          <input type="text" placeholder="핀 검색" ref={inputRef} onKeyDown={searchArticleFn} />
          <img src={readingGlasses} alt="readingGlasses" />
        </SearchSection>
        <ManageSection>
          <img src={iconAlarm} alt="iconAlarm" />
          <img src={iconMessage} alt="btnMessage" />
          <ProfileImg>
            <img src={userProfile} alt="btnProfile" />
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

  width: 180rem;
  height: 5rem;
  margin: 2.1rem auto;
  margin-bottom: 0;
`;

const NavSection = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 14.8rem;

  img {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 0.4rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.7rem;

    width: 10rem;
    height: 4rem;
    padding: 0;
    margin-right: 0.8rem;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.pinterest_black};
    ${({ theme }) => theme.fonts.pinterest_header1};
    font-size: 1.6rem;

    img {
      width: 1rem;
      height: 0.4rem;
    }
  }
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin-right: 3.6rem;

  input {
    width: 146rem;
    height: 100%;
    padding: 1.4rem 8.2rem 1.4rem 4.2rem;

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
    left: 1.4rem;

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
  align-items: center;
  gap: 1.5rem;

  width: 16rem;

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
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
  }
`;
