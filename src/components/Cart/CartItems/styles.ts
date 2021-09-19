import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItemContainer = styled.div`
  display: grid;

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1.5fr;
    height: auto;
  }

  grid-template-columns: 256px auto;
  margin-bottom: 16px;
  height: 211px;

  border-radius: 8px;
  overflow: hidden;

  background-color: ${({theme}) => theme.colors.shapes.primary};
`;

export const ImageSide = styled.div`
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    /* margin-bottom: 10px; */

    div, img {
      width: 100% !important;
      height: 100%;
    }
  }

  &>span>span {
    display: block;
  }

  display: flex;
  min-width:  256px;
`;

export const CartItemContent = styled.div`

  @media (max-width: 720px) {
    padding-bottom: 20px;
    div {
      font-size: 16px !important;
    }

    &>div:last-child {
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }

    &>p {
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  padding: 0px 16px 0px 24px;

  &>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: 300;
    font-size: 20px;

    &>div>svg {
      cursor: pointer
    }

    span {
      font-weight: 600;
      font-size: 16px;
    }

    .qtdSelect {
      background-color: #F3F5F6;
      border: 1px solid #A8A8B3;
      border-radius: 8px;
      padding-right: 8px;
    }

    &>div>select {

      background-color: transparent;
      border: none;
      
      width: 55px;
      height: 40px;
      padding-left: 12px;
      padding-left: 12px;
    }

    &>select::-ms-expand {
      display: none;
    }
  }

  &>p {
    font-size: 12px;
  }
`;
