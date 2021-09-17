import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin-left: auto;

  &>ul {
    display: flex;
    align-items: center;

    &>span {
      margin: 0 7px;
    }

    li.backArrow {
      margin-left: 6px;
    }

    li.current {
      background-color: ${({theme}) => theme.colors.shapes.primary};
      border: 1px solid ${({theme}) => theme.colors.brand.orangeLow};
      cursor: default;
      color: ${({theme}) => theme.colors.brand.orangeLow};
    }

    li {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      
      width: 32px;
      height: 32px;
      background-color: ${({theme}) => theme.colors.shapes.primaryButton};
      margin-left: 2px;
      border-radius: 8px;

      font-size: 16px;
      color: ${({theme}) => theme.colors.texts.light};
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover:not(.current) {
        background-color: #dedde2;
      }
    }
  }
`