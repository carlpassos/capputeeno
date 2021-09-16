import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: auto 352px;
  height: 100%;
  position: relative;
  width: 100%;

`;

export const CartContent = styled.div`
  width: 100%; 

  &>h2 {
    margin-top: 22px;
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  &>p {
    margin-bottom: 23px;
    font-weight: 300;

    span {
      font-weight: 600;
    }
  }
`;

export const Resume = styled.div`
  height: 100%;

  padding: 16px 24px;
  background-color: ${({theme}) => theme.colors.shapes.primary };

  position: -webkit-sticky; /* Safari */
  /* top: 40px; */
`;

export const ResumeInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ResumeTotal = styled.div`

`;

export const BuyButton = styled.div`

`;

export const HelpMenu = styled.div`

`;
