import styled from "styled-components";
import IcMore from "../../assets/icon/icon_more.svg";
import IcDropDown from "../../assets/icon/icon_dropdown.svg";
import PinUploadSection from "./PinUploadSection";
import PinUploadWebsite from "./PinUploadWebsite";

function PinUploadBox() {
  return (
    <PinUploadBoxWrapper>
      <PinUploadHeader>
        <img src={IcMore} alt="more" />
        <PinUploadCategoryBox>
          <PinUploadCategory>
            <PinUploadCategoryText>해커톤</PinUploadCategoryText>
            <img src={IcDropDown} alt="dropdown" />
          </PinUploadCategory>
          <PinUploadCategoryBtn type="button">저장</PinUploadCategoryBtn>
        </PinUploadCategoryBox>
      </PinUploadHeader>
      <PinUploadSection />
      <PinUploadWebsite />
    </PinUploadBoxWrapper>
  );
}

export default PinUploadBox;

const PinUploadBoxWrapper = styled.section`
  width: 88rem;
  margin-top: 2.4rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.pinterest_white};
`;

const PinUploadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 4.8rem 0 0.8rem 0;
  padding: 0 4rem 0 5.7rem;
`;

const PinUploadCategoryBox = styled.div`
  display: flex;
  align-items: center;
`;
const PinUploadCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4rem;

  padding: 1.2rem 0.8rem 1.2rem 1.4rem;

  border-radius: 0.6rem 0 0 0.6rem;
  background-color: ${({ theme }) => theme.colors.pinterest_gray};
`;
const PinUploadCategoryText = styled.span`
  margin-right: 9.1rem;

  ${({ theme }) => theme.fonts.pinterest_header2}
  color : ${({ theme }) => theme.colors.pinterest_deepgray}
`;
const PinUploadCategoryBtn = styled.button`
  height: 4rem;
  padding: 1.1rem 1.6rem;

  border-radius: 0 0.6rem 0.6rem 0;
  background-color: ${({ theme }) => theme.colors.pinterest_red};
  color: ${({ theme }) => theme.colors.pinterest_white};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;
