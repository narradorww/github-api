import styled from 'styled-components'


export const Wrapper = styled.div `

display: flex;
flex-direction: row;
justify-content: flex-start;
margin-left: 8px;
`;

export const WrapperStatusCount = styled.div `

display: flex;
align-items: center;

div {
    margin-right: 8px;
    text-align: center;
}
`;

export const WrapperUserName = styled.div `
display: flex;
align-items: center;,

h3{
    margin-top: 8px;
    margin-right: 8px;
    font-size:18px;
    font-weight: bold;
}
a {
    margin-top: 8px;
    font-size:18px;
    font-weight: bold;
    color: blue;
}


`;

export const WrapperImage = styled.img `

border-radius: 50%;
width: 200px;
margin: 8px;
`;


export const WrapperInfoUser = styled.div `

display: flex;
flex-direction: column;
justify-content: space-between;
height: 200px;
h1{
    font-size:32px;
    font-heigth: bold;
}
h3{
    font-size: 18px;
    font-heigth: bold;
}

h4{
    font-size: 16px;
    font-heigth: bold;
}


`;