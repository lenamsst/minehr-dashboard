import styled from "styled-components";

export const BackgroundButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: #5d405c;
  border-radius: 10px;
  margin-right: 36px;

  img {
    margin-right: 13px;
  }

  :hover {
    background-color: #8dd471;
    transform: scale(1.1);
    transition: all 0.5s;
    cursor: pointer;
  }
`;

export const TextButton = styled.h1`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #f7f7f7;
`;
