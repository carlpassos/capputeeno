import styled from 'styled-components'

  export const Container = styled.div`
    gap: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 32px 0 74px;

    
  `;

  export const ProductCard = styled.div`

    background-color: ${({theme}) => theme.colors.shapes.primary};
    border-radius: 8px 8px 4px 4px;
    overflow: hidden;

    &>img {
      width: 100%;
      height: 500px;
      object-fit: contain;
    }

    &>div {
      padding: 8px 12px;

      p {
        padding-bottom: 8px;
        border-bottom: 1px solid #DCE2E6;
        font-weight: 300;
        font-size: 16px;
      }

      span {
        margin-top: 8px;
        font-weight: 600;
        font-size: 14px;
        display: inline-block;
      }
    }
  `;
