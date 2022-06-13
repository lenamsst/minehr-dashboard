import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1440px;
  margin: auto;
 

  @media only screen and (max-width: 1439px) {
    max-width: 96vw;
  }
  @media only screen and (max-width: 720px) {
    max-width: 86vw;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  margin-bottom: 45px;
  
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 680px;
  height: 359px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  margin-right: 30px;

  
  .apexcharts-toolbar-custom-icon {
    display: flex;
    margin-left: -31em;
    margin-top: 3px;
    
  }
  @media only screen and (max-width: 720px) {
    height: 359px;
    width: 84vw;
    margin-left: -20px;
  }
`;

export const CardWrapperScatter = styled.div`
  display: flex;
  justify-content: center;
  width: 680px;
  height: 359px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  margin-right: 30px;

  .apexcharts-toolbar-custom-icon {
    display: flex;
    margin-left: -28.9em;
    margin-top: 1px;
    
  }
  @media only screen and (max-width: 720px) {
    height: 359px;
    width: 84vw;
    margin-left: -20px;
  }
`;

export const WrapperChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 20px;
  }
`;
