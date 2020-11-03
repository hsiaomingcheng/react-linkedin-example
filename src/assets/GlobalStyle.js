import { createGlobalStyle } from 'styled-components';
import { ResetCss } from './ResetCss';

export const GlobalStyle = createGlobalStyle`
    ${ResetCss}
    
    body {
        background-color: #f5f5f5;
        color: #000;
        margin: 0;
    }
`;
