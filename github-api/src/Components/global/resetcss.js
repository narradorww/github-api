import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
body{
    color: ${(props) => (props.whitecolor? "white" : "black")};
}


 


`;