import React from 'react';
import styled from 'styled-components';

interface CardContainerProps {
  imgSrc: string;
  title: string;
  info: string[];
}

const CardContainer: React.FC<CardContainerProps> = ({ imgSrc, title, info }) => {
  return (
    <Container>
      <CardImage src={imgSrc} alt={`card_image_${title}`} />
      <CardTitle>{title}</CardTitle>
      <CardInfo>
        {info.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </CardInfo>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 21.2rem;
  height: 14rem;
  margin-bottom: 4.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.2rem;
`;

const CardTitle = styled.h2`
  position: absolute;
  top: 60%;
  left: 6.6%;
  color: ${({ theme }) => theme.colors.pinterest_white};
  ${({ theme }) => theme.fonts.pinterest_header1};
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

export default CardContainer;