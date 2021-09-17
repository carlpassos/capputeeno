import styled from 'styled-components';

  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100%;
  `;

  export const FilterSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 16px;
  `;

  export const ProductTypeNav = styled.nav`
    &>ul {

      li {
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
