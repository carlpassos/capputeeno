import styled from 'styled-components';

  interface DropDownProps {
    isOpened: boolean;
  }

  export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    max-height: 24px;

    font-size: 14px;
    color: ${({theme}) => theme.colors.texts.suport};

    .dropDownText {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        margin-left: 8px;
      }
    }
  `;

  export const DropDownMenu = styled.div<DropDownProps>`
    display: ${({ isOpened }) => isOpened ? 'flex' : 'none'};
    position: absolute;

    width: auto;
    min-width: 146px;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    top: 28px;
    right: 0;
    padding: 12px 16px;

    background-color: ${({theme}) => theme.colors.shapes.primary};

    z-index: 2;

    

    &>ul {
      &>li {
        display: block;
        margin-bottom: 4px;
        line-height: 22px;
        font-size: 14px;
        color: ${({theme}) => theme.colors.texts.suport};

        cursor: pointer;
      }
    }
  `;