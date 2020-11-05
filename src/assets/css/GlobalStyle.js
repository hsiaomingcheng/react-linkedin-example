import { createGlobalStyle } from 'styled-components';
import { ResetCss } from './ResetCss';

export const GlobalStyle = createGlobalStyle`
    ${ResetCss}
    
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.primaryTextColor};
        margin: 0;
    }
`;
