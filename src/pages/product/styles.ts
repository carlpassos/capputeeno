import styled from 'styled-components'

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  
  export const Content = styled.div`
    display: grid;
    
    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }

    grid-template-columns: 1.5fr 1fr;
    gap: 32px;
    margin-top: 22px;

    &>div>img {
      width: 100%;
      border-radius: 4px;
    }
  `;


  export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;

    color: ${({theme}) => theme.colors.texts.dark};

    &>span {
      display: flex;
      justify-self: flex-end;
      margin-top: auto;
    }
  `;

  export const ProductHeader = styled.div`
    
    &>span {
      font-size: 16px;
      display: inline-block;
      margin-bottom: 12px;
    }

    &>div {
      margin-bottom: 58px;

      h2 {
        font-size: 32px;
        font-weight: 300;
      }

      span {
        display: inline-block;
        
        font-weight: 600;
        font-size: 20px;
        
        margin-bottom: 24px;
      }

      &>p {
        font-weight: normal;
        font-size: 12px;
      }
    }

    
  `;

  export const Description = styled.div`
    

    &>h3 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;  
      color: ${({theme}) => theme.colors.texts.light};

      margin-bottom: 8px;

    }

    p {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 20px
    }
  `;

  export const AddToCartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
    margin-top: auto;
    cursor: pointer;

    height: 44px;
    background-color: ${({theme}) => theme.colors.brand.blue};
    border-radius: 4px;
    
    color: ${({theme}) => theme.colors.shapes.primary};
    text-transform: uppercase;
    font-weight: 400;

    width: 100%;

    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05)
    }

    &>svg {
      margin-right: 8px;
      path {
        stroke: ${({theme}) => theme.colors.shapes.primary} !important;
      }
    }
    
  `;

  