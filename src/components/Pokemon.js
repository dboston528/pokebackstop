import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.div`
  background-color: navy;
  border-radius: 10px;
  padding: 25px;
  font-color: white;

  img {
    height: 100px;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    color: #000000;
    margin: 0;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    margin: 0.5rem 0 4rem 0;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    color: #4a4a4a;
  }
`;

const Pokemon = ({
  name = '',
  squirtleHeight = '',
  squirtleImage = '',
  squirtleBase,
  squirtleWeight,
}) => {
  return (
    <StyledArticle>
      <h1>{name}</h1>
      <img src={squirtleImage.front_default} alt="Squirtle"></img>
      <h1>{squirtleHeight}</h1>
      <h1>Base Experince</h1>
      <h2>{squirtleBase}</h2>
      <h1>{squirtleWeight}</h1>
    </StyledArticle>
  );
};

export default Pokemon;
