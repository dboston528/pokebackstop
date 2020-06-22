import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  background-color: navy;
  border-radius: 10px;
  padding: 25px;
  color: white;

  img {
    height: 100px;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;

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
    <CardStyle>
      <h1>{name}</h1>
      <img
        height={300}
        src={squirtleImage.front_default}
        alt="Pokemon Image"
      ></img>
      <h3>Height</h3>
      <p>{squirtleHeight}</p>
      <h3>Base Experince</h3>
      <p>{squirtleBase}</p>
      <h3>Weight</h3>
      <p>{squirtleWeight}</p>
    </CardStyle>
  );
};

export default Pokemon;
