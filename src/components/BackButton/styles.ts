import styled from 'styled-components';


export const Container = styled.button`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.texts.light};
  font-size: 14px;

  cursor: pointer;

  &>svg {
    margin-right: 8px;
  }
`;
