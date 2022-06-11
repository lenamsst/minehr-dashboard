import { createGlobalStyle } from "styled-components";
import NavFontMontserratRegular from "../../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import NavFontMontserratSemiBold from "../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat-Regular';
        src: local('Montserrat'),
        url(${NavFontMontserratRegular}) format('truetype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Montserrat-SemiBold';
        src: local('Montserrat'),
        url(${NavFontMontserratSemiBold}) format('truetype');
        font-weight: 700;
    }
 
`;