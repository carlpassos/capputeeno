import styled from 'styled-components';

  interface DropDownProps {
    isOpened: boolean;
  }

  export const Container = styled.div<DropDownProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    max-height: 24px;

    font-size: 14px;
    color: ${({theme}) => theme.colors.texts.suport};
    
    
    .dropDownTextOpened {
      background-color: ${({ theme }) => theme.colors.shapes.background};
    }
    
    .dropDownText {
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 4px;
      background-color: ${({ isOpened, theme }) => !isOpened ? "transparent" : theme.colors.shapes.background};

      transition: background-color 0.3s ease;
      padding: 5px 10px;

      svg {
        margin-left: 8px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.shapes.background};
      }
    }

    
  `;

  export const DropDownMenu = styled.div<DropDownProps>`
    display: ${({ isOpened }) => isOpened ? 'flex' : 'none'};
    position: absolute;

    width: auto;
    min-width: 176px;
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