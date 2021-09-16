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
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);

  padding: 16px 24px;
  background-color: ${({theme}) => theme.colors.shapes.primary };
  font-size: 16px;
  font-size: 300;

  top: 60px;
  position: -webkit-sticky;
  position: sticky;

  &>h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 29px;
  }
`;

export const ResumeInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ResumeTotal = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 40px;
  border-top: 1px solid #DCE2E6;
  padding-top: 8px;
  font-weight: 600;
`;

export const BuyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  
  color: #fff;
  background-color: ${({theme}) => theme.colors.brand.green};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;
  `;

export const HelpMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  justify-self: flex-end;

  color: #737380;
  text-decoration: underline;
  text-transform: uppercase;

  &>li {
    margin-bottom: 12px;
    cursor: pointer;
  }
`;
