import styled from 'styled-components'

  export const Container = styled.div`
    display: grid;
    gap: 32px;

    
    

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 920px) {
      grid-template-columns: 1fr 1fr;
      max-width: 904px;
    }

    @media (max-width: 506px) {
      grid-template-columns: 1fr;
    }

    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 32px 0 74px;
  `;

  export const ProductCard = styled.div`

    background-color: ${({theme}) => theme.colors.shapes.primary};
    border-radius: 8px 8px 4px 4px;
    overflow: hidden;
    cursor: pointer;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }

    &>img {
      width: 100%;
      /* height: 500px; */
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
