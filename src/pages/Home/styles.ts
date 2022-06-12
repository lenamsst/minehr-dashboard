import styled from 'styled-components';

export const Wrapper = styled.main`
    max-width: 1440px;
    margin: 0 auto;
  // border: 1px solid red;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    margin-bottom: 45px;
   // border: 1px solid red;
   `;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    //border: 1px solid red;
    width: 680px;
    height: 359px;    
    background-color: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 23px;
    margin-right: 20px;   

    .apexcharts-toolbar-custom-icon {
        display: flex;    
        margin-left: -31em;
        margin-top: 3px;
        //border: 2px solid red;
    }

`


export const CardWrapperScatter = styled.div`
    display: flex;
    justify-content: center;
   
   
    width: 680px;
    height: 359px;    
    background-color: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 23px;

    .apexcharts-toolbar-custom-icon {
        display: flex;    
        margin-left: -28.9em;
        margin-top: 1px;
        //border: 2px solid red;
    }

    
`

export const WrapperChart = styled.div`
    display: flex;
    justify-content: center;


`