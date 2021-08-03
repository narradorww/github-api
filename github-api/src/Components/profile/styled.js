import styled from 'styled-components'


export const Wrapper = styled.div `

display: flex;
flex-direction: column;
padding: 32 32 32 32 32;
margin-left: 8px;
`;

export const WrapperStatusCount = styled.div `

display: flex;
align-items: center;
justify-content: space-between;
div {
    margin-right: 8px;
    text-align: center;
}
`;

export const WrapperUserName = styled.div `
display: flex;
align-items: center;
h3{
    margin-right: 10px;
}


`;

export const WrapperImage = styled.img `

border-radius: 50%;
width: 200px;
margin: 8px;
`;


export const WrapperInfoUser = styled.div `

display: flex;
align-items: flex-start;
height: auto;


`;