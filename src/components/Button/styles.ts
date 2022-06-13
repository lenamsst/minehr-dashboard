import styled from 'styled-components';

export const BackgroundButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background-color: #5D405C ;
    border-radius: 10px;
    
    img {        
        margin-right: 13px;
    }

    :hover {
    background-color: #8DD471;
    transition: 3s;
    
  }

`

export const TextButton = styled.h1`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #F7F7F7;
`