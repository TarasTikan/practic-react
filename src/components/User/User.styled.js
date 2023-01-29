import styled from 'styled-components';

export const Span = styled.span`
color: ${({isRed}) => (isRed ? "gray" : "brown")};
font-style: italic;
background-color: ${({Online}) => (Online === 'yes' ? "green" : "pink")};
`
export const Paragraph = styled.p`
  color: violet;
  font-size: 30px;
  font-weight: 20px;

  &:hover{
    color: green;
    ${Span}{
    background-color: violet;
}
  }

`;

