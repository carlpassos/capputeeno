import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 0px;

  background-color: ${({theme}) => theme.colors.shapes.searchbar};
  border-radius: 8px;
  width: 352px;
  height: 42px;

  margin-right: 27px;

  input {
    flex: 1;
    margin-right: 10px;
    padding-left: 16px;
    height: 100%;

    background-color: transparent;
    border: none;
    font-size: 16px;

    &&::placeholder {
      color: ${({theme}) => theme.colors.texts.dark}
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
`