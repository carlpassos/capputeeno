import styled from 'styled-components';


  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    min-height: 100vh;
  `;

  export const Header = styled.header`
    display: flex;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.shapes.primary};
    width: 100%;
    height: 80px;

    &>div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      width: 100%;
      max-width: 1120px;

      &>svg {
        width: 215px;
      }
      
    }
  `;

  export const LeftSideElements = styled.div`
    display: flex;
    align-items: center;
  `;

  export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 42px;
    height: 42px;
    border-radius: 100%;

    /* &:hover {
     background-color: ${({theme}) => theme.colors.shapes.background};
    } */

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      bottom: 0;

      width: 17px;
      height: 17px;
      border-radius: 100%;

      color: #fff;
      background-color: ${({theme}) => theme.colors.brand.red};

      font-size: 10px;
      font-weight: 500;
    }
  `;

  export const Content = styled.div`
    padding: 34px 0px;
    flex: 1;
    width: 100%;
    max-width: 1120px;
  `;
