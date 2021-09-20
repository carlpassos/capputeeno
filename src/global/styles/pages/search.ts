import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

  width: 100%;
  min-height: 100%;

  span {
    margin-bottom: 30px;
  }
`;

export const FilterSection = styled.div`

  @media (max-width: 720px) {
    flex-direction: column;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px;
`;

export const ProductTypeNav = styled.nav`

  @media (max-width: 720px) {
    margin-bottom: 18px
  }

  &>ul {

    li {

      @media (max-width: 720px) {
        font-size: 13px;
        margin-right: 15px;
      }

      cursor: pointer;
      display: inline;
      margin-right: 40px;
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.texts.suport};
      transition: color 0.3s ease;
    }

    li:hover:not(.current) {
      color: ${({theme}) => theme.colors.texts.dark};
    }

    li.current {
      color: ${({theme}) => theme.colors.texts.dark};
      font-weight: 600;
      border-bottom: 4px solid ${({theme}) => theme.colors.brand.orangeLow}
    }
  }
`;

export {};